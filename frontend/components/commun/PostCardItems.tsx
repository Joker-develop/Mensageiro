/* eslint-disable @next/next/no-img-element */
"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
import { Button } from "../ui/button";
import { HeartIcon, LogInIcon, MessageCircleIcon, SendIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";


type PostProps = {
  id: string;
  content: string;
  postImage: string;
  createAt: string;
  updateAt: string;
  author: {
      username: string;
      name: string | null;
      id: string;
      profileImg: string | null;
  };
  comments: {
    id: string,
    content: string,
    createAt: string,
    author: {
      username: string;
      name: string | null;
      id: string;
      profileImg: string | null;
    };
  }[];
  likes: {
      userId: string,
  }[];
  _count: {
      likes: number,
      comments: number,
  };
  
}

type PropsUser = {
  authorId: string;
  postId: string;
}

type PropsUserComent = {
  authorId: string;
  postId: string;
  commentId: string;
}

type PropsComent = {
  authorId: string;
  postId: string;
  content: string;
}

type PropsLike = {
  userId: string;
  postId: string
}

function PostCardItems({ post, dbUserId, authImg }: { post: PostProps; dbUserId: string | null, authImg: string | null }) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [hasLiked, setHasLiked] = useState(post.likes.some((like) => like.userId === dbUserId));
  const [optimisticLikes, setOptmisticLikes] = useState(post._count.likes);
  const [showComments, setShowComments] = useState(false);
  const queryClient = useQueryClient();


  const { mutate: likePost, isPending: isLiking } = useMutation({
		mutationFn: async ({userId, postId}: PropsLike) => {
			try {
				const resp = await fetch( `https://imppm-backend.onrender.com/publications/post/${postId}/like`, {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
        });

				const data = await resp.json();
				if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");

				return data;
			} catch (error) {
				console.error(error);
        return { success: false, error: "Falha ao gostar" };
			}
		},
		onSuccess: () => {

			// instead, update the cache directly for that post
			// queryClient.setQueryData(["likes"], (oldData: PostProps[]) => {
			// 	return oldData.map((p) => {
			// 		if (p.id === post.id) {
			// 			return { ...p, likes: updatedLikes };
			// 		}
			// 		return p;
			// 	});
			// });


			// this is not the best UX, bc it will refetch all posts
			queryClient.invalidateQueries({ queryKey: ["likes"] });

		},
		onError: (error) => {
			console.error(error);
		},
	});

  const { mutate: commentPost, isPending: isCommenting } = useMutation({
		mutationFn: async ({ authorId, postId, content }: PropsComent) => {
			try {
				const resp = await fetch( `https://imppm-backend.onrender.com/publications/post/${postId}/comment`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ authorId, content }),
				});
				const data = await resp.json();

        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");

				return data;
			} catch (error) {
				console.error(error);
        return { success: false, error: "Falha ao comentar o comentário" };
			}
		},
		onSuccess: () => {
			setNewComment("");
			queryClient.invalidateQueries({ queryKey: ["comments"] });
		},
	});

  const { mutate: deletePost, isPending: isDeleting } = useMutation({
		mutationFn: async ({authorId, postId}: PropsUser) => {
			try {
				const resp = await fetch(`https://imppm-backend.onrender.com/publications/post/${postId}`, {
					method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorId }),
				});
				const data = await resp.json();

        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
				return data;
			} catch (error) {
				console.error(error);
        return { success: false, error: "Falha ao deletar o post" };
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["posts"] });
		},
	});

  const { mutate: deleteComment, isPending: isDeletingComment } = useMutation({
		mutationFn: async ({authorId, postId, commentId}: PropsUserComent) => {
			try {
				const resp = await fetch(`https://imppm-backend.onrender.com/publications/post/${postId}/comment/${commentId}`, {
					method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorId }),
				});
				const data = await resp.json();

        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
				return data;
			} catch (error) {
				console.error(error);
        return { success: false, error: "Falha ao deletar o comentário" };
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["posts", "comments"] });
		},
	});




  const handleLike = async () => {
    if (isLiking) return;

    
    try {
      setHasLiked((prev) => !prev);
      setOptmisticLikes((prev) => prev + (hasLiked ? -1 : 1));
      likePost({userId: dbUserId!, postId: post.id});
    } catch (error) {
      console.error(error)
      setOptmisticLikes(post._count.likes);
      setHasLiked(post.likes.some((like) => like.userId === dbUserId));
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || isCommenting) return;
    
    commentPost({authorId: dbUserId!, postId: post.id, content: newComment});
  };

  const handleDeletePost = async () => {
    if (isDeleting) return;
    
    deletePost({authorId: dbUserId!, postId: post.id});
  };

  const handleDeleteComment = async (commentId: string) => {
    if (isDeletingComment) return;

    deleteComment({authorId: dbUserId!, commentId: commentId, postId: post.id});
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          <div className="flex space-x-3 sm:space-x-4">
            <Link href={`/profile/${post.author.username}`}>
              <Avatar className="size-8 sm:w-10 sm:h-10">
                <AvatarImage src={post.author.profileImg ?? "/avatar.png"} />
              </Avatar>
            </Link>

            {/* POST HEADER & TEXT CONTENT */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 truncate">
                  <Link
                    href={`/profile/${post.author.username}`}
                    className="font-semibold truncate"
                  >
                    {post.author.name}
                  </Link>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Link href={`/profile/${post.author.username}`}>@{post.author.username}</Link>
                    <span>•</span>
                    <span>{formatDistanceToNow(new Date(post.createAt))} ago</span>
                  </div>
                </div>
                {/* Check if current user is the post author */}
                {dbUserId === post.author.id && (
                  <DeleteAlertDialog title={"Delete Post"} description={"Esta ação não pode ser desfeita."} isDeleting={isDeleting} onDelete={handleDeletePost} />
                )}
              </div>
              <p className="mt-2 text-sm text-foreground break-words">{post.content}</p>
            </div>
          </div>

          {/* POST IMAGE */}
          {post.postImage && (
            <div className="rounded-lg overflow-hidden">
              <img  src={post.postImage} alt="Post content" className="w-full h-auto object-cover" />
            </div>
          )}

          {/* LIKE & COMMENT BUTTONS */}
          <div className="flex items-center pt-2 space-x-4">
            { user ? (
              <Button
                variant="ghost"
                size="sm"
                className={`text-muted-foreground gap-2 cursor-pointer ${
                  hasLiked ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
                }`}
                onClick={handleLike}
              >
                {hasLiked ? (
                  <HeartIcon className="size-5 fill-current" />
                ) : (
                  <HeartIcon className="size-5" />
                )}
                <span>{optimisticLikes}</span>
              </Button>
            ) : (
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="text-muted-foreground gap-2 cursor-pointer">
                  <HeartIcon className="size-5" />
                  <span>{optimisticLikes}</span>
                </Button>
              </SignInButton>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2 cursor-pointer hover:text-blue-500"
              onClick={() => setShowComments((prev) => !prev)}
            >
              <MessageCircleIcon
                className={`size-5 ${showComments ? "fill-blue-500 text-blue-500" : ""}`}
              />
              <span>{post.comments.length}</span>
            </Button>
          </div>

          {/* COMMENTS SECTION */}
          { showComments && (
            <div className="space-y-4 pt-4 border-t">
              <div className="space-y-4">
                {/* DISPLAY COMMENTS */}
                { post.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <Avatar className="size-8 flex-shrink-0">
                      <AvatarImage src={comment.author.profileImg ?? "/avatar.png"} />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 truncate gap-x-1 gap-y-1">
                          <span className="font-medium text-sm">{comment.author.name}</span>
                          <span className="text-sm text-muted-foreground">
                            @{comment.author.username}
                          </span>
                          <span className="text-sm text-muted-foreground">·</span>
                          <span className="text-sm text-muted-foreground">
                            {formatDistanceToNow(new Date(comment.createAt))} ago
                          </span>
                        </div>
                        {dbUserId === comment.author.id && (
                          <DeleteAlertDialog title={"Delete Comentário"} description={"Esta ação não pode ser desfeita."} isDeleting={isDeletingComment} onDelete={() =>(handleDeleteComment(comment.id))} />
                        )}
                      </div>
                      <p className="text-sm break-words">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              { user ? (
                <div className="flex space-x-3">
                  <Avatar className="size-8 flex-shrink-0">
                    <AvatarImage src={ authImg || "/avatar.png"} />
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Escrever um comentário..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[80px] resize-none"
                    />
                    <div className="flex justify-end mt-2">
                      <Button
                        size="sm"
                        onClick={handleAddComment}
                        className="flex items-center gap-2"
                        disabled={!newComment.trim() || isCommenting}
                      >
                        {isCommenting ? (
                          "Postando..."
                        ) : (
                          <>
                            <SendIcon className="size-4" />
                            Comentar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center p-4 border rounded-lg bg-muted/50">
                  <SignInButton mode="modal">
                    <Button variant="outline" className="gap-2">
                      <LogInIcon className="size-4" />
                        Faça o login para comentares
                    </Button>
                  </SignInButton>
                </div>
              )}
            </div>
          )}

        </div>
      </CardContent>
    </Card>
  );
}
export default PostCardItems;
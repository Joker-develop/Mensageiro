"use client";

import { useUser } from "@clerk/nextjs";
import { useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
// import { ImageIcon, Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ImageIcon, Loader2Icon, SendIcon, XIcon } from "lucide-react";
// import ImageUpload from "./ImageUpload";
// import toast from "react-hot-toast";
// /import ImageUpload from "./ImageUpload";




interface Props {
  getUserId: string;
}

type createPostParams = {
  getUserId: string;
  content: string;
  imageUrl: string | ArrayBuffer | null
}
function CreatePostItems({getUserId}: Props) {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

	const {
		mutate: createPost,
		isPending,
		isError,
		error,
	} = useMutation({
		mutationFn: async ({ getUserId, content, imageUrl }: createPostParams ) => {
			try {
				const res = await fetch("http://localhost:8000/publications/post/create", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ getUserId, content, imageUrl}),
				});
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				console.error("Failed to create post:", error);
			}
		},
		onSuccess: () => {
			setContent("");
			setImageUrl(null);
			queryClient.invalidateQueries({ queryKey: ["posts"] });
		},
	});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!content.trim() && !imageUrl) return;
    e.preventDefault();
    
    createPost({getUserId,content,imageUrl})
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImageUrl(reader.result);
			};
			reader.readAsDataURL(file);
		}
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user?.imageUrl || "/avatar.png"} />
            </Avatar>
            <Textarea
              placeholder="Em que estás a pensar?"
              className="min-h-[100px] resize-none border-none focus-visible:ring-0 p-2.5 text-base"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPending}
            />
          </div>
          {/* SHOW IMAGENS UPLOAD */}
          {imageUrl && (
            <div className='relative w-72 mx-auto'>
              <XIcon
                className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
                onClick={() => {
                  setImageUrl(null);
                  if ( imgRef.current)
                    imgRef.current.value = "";
                }}
              />
              <img src={imageUrl as string} alt="photo" className='w-full mx-auto h-72 object-contain rounded' />
            </div>
				  )}

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary cursor-pointer"
                onClick={() => imgRef.current?.click()}
                disabled={isPending}
              >
                <ImageIcon className="size-4 mr-2"  />
                <input type='file' accept='image/*' hidden ref={imgRef} onChange={handleImgChange} />
                Foto
              </Button>
            </div>
            <Button
              className="flex items-center"
              disabled={(!content.trim() && !imageUrl) || isPending}
            >
              {isPending ? (
                <>
                  <Loader2Icon className="size-4 mr-2 animate-spin" />
                  Postando...
                </>
              ) : (
                <>
                  <SendIcon className="size-4 mr-2" />
                  Criar Post
                </>
              )}
            </Button>
          </div>
          {isError && <div className='text-red-500'>{error.message}</div>}
        </form>
      </CardContent>
    </Card>
  );
}
export default CreatePostItems;
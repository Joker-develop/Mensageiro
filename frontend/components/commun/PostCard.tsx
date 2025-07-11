"use client";

import PostCardItems from "./PostCardItems";
import { useQuery } from "@tanstack/react-query";
import PostSkeleton from "../skeletonss/PostSkeleton";


// type PostProps = {
//   id: string;
//   authorId: string;
//   content: string;
//   postImage: string;
//   createAt: string;
//   updateAt: string;
//   author: {
//       username: string;
//       name: string | null;
//       id: string;
//       profileImg: string | null;
//   };
//   comments: {
//     id: string,
//     content: string,
//     createAt: string,
//     author: {
//         username: string;
//         name: string | null;
//         id: string;
//         profileImg: string | null;
//     };
//   }[],
//   likes: {
//       userId: string,
//   }[],
//   _count: {
//       likes: number,
//       comments: number,
//   },
  
// }[]

type UserData = {
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



function PostCard({ dbUserId, authImg, feedType }: { dbUserId: string | null, authImg: string | null, feedType: string }) {

  const getPostEndpoint = () => {
		switch (feedType) {
			case "forYou":
				return "https://imppm-backend.onrender.com/publications/feed";
			case "following":
				return `https://imppm-backend.onrender.com/publications/user/${dbUserId}/following`;
			case "posts":
				return `https://imppm-backend.onrender.com/publications/user/${dbUserId}/posts?page=1`;
			case "likes":
				return `https://imppm-backend.onrender.com/publications/user/${dbUserId}/likes`;
			default:
				return "https://imppm-backend.onrender.com/publications/feed";
		}
	};

   const getDescribePostEndpoint = () => {
		switch (feedType) {
			case "forYou":
				return "Sem postagens nesta Aba. Trocar 👻";
			case "following":
				return "Nenhum posts de quem segues para mostrar";
			case "posts":
				return "Não fizeste nenhum posts";
			case "likes":
				return "Nenhum posts que gostaste para mostrar";
			default:
				return "Sem postagens nesta Aba. Trocar 👻";
		}
	};

	const getKeyPoint = () => {
		switch (feedType) {
			case "forYou":
				return "feeds";
			case "following":
				return "followings";
			case "posts":
				return "posts";
			case "likes":
				return "likes";
			default:
				return "feeds";
		}
	};

	const POST_ENDPOINT = getPostEndpoint();
  	const DESCRIBE_POST_ENDPOINT = getDescribePostEndpoint();
	const KEY_ENDPOINT = getKeyPoint();

  const {
		data: posts,
		isLoading,
		isRefetching,
	} = useQuery({
		queryKey: [KEY_ENDPOINT, "comments"],
		queryFn: async () => {
			try {
				const resp = await fetch(POST_ENDPOINT);
				const data = await resp.json();

				if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");

				return data;
			} catch (error) {
				console.error(error);
			}
		},
	});

//   useEffect(() => {
// 		refetch();
// 	}, [refetch, authImg, dbUserId]);

  return (
    <>
      {(isLoading || isRefetching) && (
				<div className='flex flex-col justify-center'>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</div>
			)}
			{!isLoading && !isRefetching && posts?.length === 0 && (
				<p className='text-center my-4 py-8 text-muted-foreground'>{DESCRIBE_POST_ENDPOINT}</p>
			)}

      {!isLoading && !isRefetching && posts && (
        <div className="space-y-6">
          { posts.map((post: UserData) => (
            <PostCardItems key={post.id} post={post} authImg={ authImg } dbUserId={ dbUserId  } />
          ))}
        </div>
      )}
    </>
    
  );
}

export default PostCard;

// import { getFeddPosts } from "@/actions/post.actions";
import { getUserByClerkId } from "@/actions/user.actions";
import CreatePost from "@/components/commun/CreatePost";
import PostCard from "@/components/commun/PostCard";
import WhoToFollow from "@/components/commun/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

interface UserData {
  id: string;
  name: string;
  username: string;
  bio: string;
  profileImg: string;
  coverImg: string;
  location: string;
  website: string;
  createAt: string,
  _count: { followers: number, following: number, posts: number }
}

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

export default async function Home() {
  const user = await currentUser();
  // const posts: PostProps = await getFeddPosts();
  const dbUserId: UserData = await getUserByClerkId();

  // const posts = [{
  //   id: "909",
  //   content: "Minha primeria publicação textando",
  //   image: "/exemplar 6.jpg",
  //   createdAt: "2025-03-01T23:29:28.925Z",
  //   author: {
  //       id: "0023",
  //       username: "usuario One",
  //       image: "/imagens/avatar2.png",
  //       name: "User Jhon",
  //   },
  //   comments: [{
  //     id: "0802",
  //     content: "Comeintei agorinha mesmo",
  //     createdAt: "2025-03-06T12:29:28.925Z",
  //     author: {
  //       id: "799",
  //       name: "User Philip",
  //       username: "usuario Two",
  //       image: "/imagens/avatar2.png",
  //     }
  //   }],
  //   likes: [{
  //     userId: "0845"
  //   }],
  //   _count: {
  //     likes: 3,
  //     comments: 5
  //   }
  // }]


  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {/* CREATE POSTS */}
        { user ? <CreatePost /> : null}
        
        {/* POSTS */}
        <PostCard authImg={ dbUserId ? dbUserId.profileImg : null } feedType="forYou" dbUserId={ dbUserId ? dbUserId.id : null } />
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
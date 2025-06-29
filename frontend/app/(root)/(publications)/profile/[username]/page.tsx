
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
import { getProfileByUsername, isFollowing } from "@/actions/profile.action";
import { Metadata } from "next";
// import { getUserByClerkId } from "@/actions/user.actions";
  
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

type PropsParams = {
  params: Promise<{ username: string}>;
}


// interface PageProps { params: { username: string } }

export async function generateMetadata({ params }: PropsParams ): Promise<Metadata> {

  const username = (await params).username;
  const user: UserData = await getProfileByUsername(username);

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Confira o perfil de ${user.username}.`,
  };
}
  
async function ProfilePageServer({ params }: PropsParams)  {
  const username = (await params).username;

  // const dbUserId: UserData = await getUserByClerkId();
  const user: UserData = await getProfileByUsername(username);

  if (!user ) notFound();

  const [isCurrentUserFollowing] = await Promise.all([
    isFollowing(username, user.id),
  ]);

  if (!user) return notFound();

  // const [posts, likedPosts, followPosts, isCurrentUserFollowing] = await Promise.all([
  //   getUserPosts(user.id),
  //   getUserLikedPosts(user.id),
  //   getFollowUserPosts(user.id),
  //   isFollowing(username, user.id),
  // ]);

  // const user = {
  //   id: "0023",
  //   username: "user-one",
  //   name: "User Jhon",
  //   image: "/imagens/avatar2.png",
  //   bio: "Qual coisa sobre mim",
  //   website: "user-web.com",
  //   location: "Huambo",
  //   createAt: "2025-02-25T23:29:28.925Z",
  //   _count: {
  //     posts: 1,
  //     following: 12,
  //     followers: 200
  //   }
  // }
  // const posts = [{
  //   id: "909",
  //   content: "Minha primeria publicação textando",
  //   postImage: "/exemplar 6.jpg",
  //   createAt: "2025-03-01T23:29:28.925Z",
  //   updateAt: "2025-03-01T23:29:28.925Z",
  //   author: {
  //       id: "0023",
  //       username: "usuario One",
  //       profileImg: "/imagens/avatar2.png",
  //       name: "User Jhon",
  //   },
  //   comments: [{
  //     id: "0802",
  //     content: "Comeintei agorinha mesmo",
  //     createAt: "2025-03-06T12:29:28.925Z",
  //     author: {
  //       id: "799",
  //       name: "User Philip",
  //       username: "usuario Two",
  //       profileImg: "/imagens/avatar2.png",
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


  // const isCurrentUserFollowing = true
  

  return (
    <ProfilePageClient
      authImg={ user ? user.profileImg : null }
      dbUserId={ user ? user.id : null }
      user={user}
      isFollowing={isCurrentUserFollowing}
    />
  );

}
export default ProfilePageServer;
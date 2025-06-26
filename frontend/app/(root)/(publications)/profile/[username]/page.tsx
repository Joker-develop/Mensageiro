
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
import { getProfileByUsername, isFollowing } from "@/actions/profile.action";
import { getUserByClerkId } from "@/actions/user.actions";
  
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

export async function generateMetadata({ params }: { params: { username: string } }) {

  const { username } = await params;
  const user: UserData = await getProfileByUsername(username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Confira o perfil de ${user.username}.`,
  };
}
  
async function ProfilePageServer({ params }: { params: { username: string } }) {
  const { username } = await params;
  const dbUserId: UserData = await getUserByClerkId();
  // const user: UserData = await getProfileByUsername(username);

  if (!dbUserId) notFound();

  const [isCurrentUserFollowing] = await Promise.all([
    isFollowing(username, dbUserId.id),
  ]);

  // if (!user) notFound();

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
      authImg={ dbUserId ? dbUserId.profileImg : null }
      dbUserId={ dbUserId ? dbUserId.id : null }
      user={dbUserId}
      isFollowing={isCurrentUserFollowing}
    />
  );

}
export default ProfilePageServer;
import { getUserByClerkId } from "@/actions/user.actions";
import NotificationsPage from "./pageNotification";

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

async function Page() {
  const user: UserData = await getUserByClerkId();
  if (!user) return null;
  return (
    <NotificationsPage userName={user.username}/>
  );
}
export default Page;
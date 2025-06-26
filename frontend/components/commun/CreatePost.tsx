import { getUserByClerkId } from "@/actions/user.actions";
import CreatePostItems from "./CreatePostItems";



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


async function CreatePost() {

	const userID: UserData = await getUserByClerkId();
	if (!userID) return null;
	
	const getUserId = userID.id;
	return (
    	<CreatePostItems 
			getUserId = {getUserId}
		/>
  	);
}
export default CreatePost;
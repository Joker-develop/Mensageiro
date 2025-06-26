//import { getRandomUsers } from "@/actions/user.action";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getUserByClerkId } from "@/actions/user.actions";
import WhoToFollowItems from "./WhoToFollowItems";

interface WhoToFollowProps {
  name: string | null;
  id: string;
  username: string;
  profileImg: string | null;
  _count: {
      followers: number;
  };
}

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

async function WhoToFollow() {
    // const users = [{
    //     id: "0023",
    //     username: "usuarioOne",
    //     name: "User Jhon",
    //     profileImg: "/imagens/avatar2.png",
    //     bio: "Qual coisa sobre mim",
    //     website: "user-web.com",
    //     location: "Huambo",
    //     _count: {
    //         following: 12,
    //         followers: 200
    //     }
    // }]
//   const users = await getRandomUsers();

  async function whotoFollowUsers (){
    try {

      const userID: UserData = await getUserByClerkId();
      if (!userID) return null;
      
      const getUserId = userID.id;
      const resp = await fetch( "http://localhost:8000/publications/suggestions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ getUserId }),
      });

      const data = await resp.json();
      if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
      
      return data;
    } catch (error) {
      console.error("Falha ao sugerir Usuários:", error);
      // toast.error("Failed to create post");
    }
  }

  const users: WhoToFollowProps[] = await whotoFollowUsers();
  if ( users === null || users.length  === 0 ) return null;
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sugestões para ti</CardTitle>
      </CardHeader>
      <CardContent>
        <WhoToFollowItems userData={users} />
      </CardContent>
    </Card>
  );
  
}
export default WhoToFollow;
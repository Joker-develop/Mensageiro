"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { getUserByClerkId } from "@/actions/user.actions";
// import toast from "react-hot-toast";

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

function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  async function userFollow(){
    try {
      const userID: UserData = await getUserByClerkId();
      if (!userID) return null;
      
      const getUserId = userID.id;
      const resp = await fetch( `http://localhost:8000/publications/user/${userId}/follow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ getUserId }),
      });

      const data = await resp.json();
      if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
      return 
      // toast.success("User followed successfully");
    } catch (error) {
      console.log(error)
      // toast.error("Error following user");
    } finally {
      setIsLoading(false);
    }
  }
  const handleFollow = async () => {
    setIsLoading(true);

    await userFollow()
  };

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Seguir"}
    </Button>
  );
}
export default FollowButton;
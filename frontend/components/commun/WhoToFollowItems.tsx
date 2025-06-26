"use client"

import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import FollowButton from "./FollowButton";
import { useEffect, useState } from "react";

interface WhoToFollowProps {
  name: string | null;
  id: string;
  username: string;
  profileImg: string | null;
  _count: {
      followers: number;
  };
  
}

const WhoToFollowItems= ({userData}: {userData: WhoToFollowProps[]}) => {
  const [users,updateUsers] = useState<WhoToFollowProps[]>();

  useEffect(() => {
    updateUsers(userData)
  },[userData]);
  
  return(
    <div className="space-y-4">
      {
        users?.map( user => {
          return(
            <div key={user.id} className="flex gap-2 items-center justify-between ">
              <div className="flex items-center gap-1">
                <Link href={`/profile/${user.username}`}>
                  <Avatar>
                    <AvatarImage src={user.profileImg ?? "/avatar.png"} />
                  </Avatar>
                </Link>
                <div className="text-xs">
                  <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                    {user.name}
                  </Link>
                  <p className="text-muted-foreground">@{user.username}</p>
                  <p className="text-muted-foreground">{user._count.followers} seguidores</p>
                </div>
              </div>
              <FollowButton userId={user.id} />
            </div>
          )
        })
      }
    </div>
  );
}
export default WhoToFollowItems;
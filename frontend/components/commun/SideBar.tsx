

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { LinkIcon, MapPinIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
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


async function Sidebar() {
  const authUser = await currentUser();


  if (!authUser) return <UnAuthenticatedSidebar />;

  const user: UserData = await getUserByClerkId();
  if (!user) return null;



  return (
    <div className="sticky top-20">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Link
              href={`/profile/${user.username}`}
              className="flex flex-col items-center justify-center"
            >
              <Avatar className="w-20 h-20 border-2 ">
                <AvatarImage src={user.profileImg || "/avatar.png"} />
              </Avatar>

              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.username}</p>
              </div>
            </Link>

            {user.bio && <p className="mt-3 text-sm text-muted-foreground">{user.bio}</p>}

            <div className="w-full">
              <Separator className="my-4" />
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{user._count.following}</p>
                  <p className="text-xs text-muted-foreground">Seguir a</p>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <p className="font-medium">{user._count.followers}</p>
                  <p className="text-xs text-muted-foreground">Seguidores</p>
                </div>
              </div>
              <Separator className="my-4" />
            </div>

            <div className="w-full space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <MapPinIcon className="w-4 h-4 mr-2" />
                {user.location || "Sem localização"}
              </div>
              <div className="flex items-center text-muted-foreground">
                <LinkIcon className="w-4 h-4 mr-2 shrink-0" />
                {user.website ? (
                  <a href={`${user.website}`} className="hover:underline truncate" target="_blank">
                    {user.website}
                  </a>
                ) : (
                  "Sem site"
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;

const UnAuthenticatedSidebar = () => (
  <div className="sticky top-20">
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Bem vindo de volta!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground mb-4">
          Faça login para acessar seu perfil e se conectar com outras pessoas.
        </p>
        <SignInButton mode="modal">
          <Button className="w-full" variant="outline">
            Login
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button className="w-full mt-2" variant="default">
            Inscrever-se
          </Button>
        </SignUpButton>
      </CardContent>
    </Card>
  </div>
);
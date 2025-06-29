"use client";

// import { updateProfile } from "@/actions/profile.action";
// import { updateProfile } from "@/actions/profile.action";
// import { getProfileByUsername, getUserPosts, updateProfile } from "@/actions/profile.action";
// import { toggleFollow } from "@/actions/user.action";
// import toast from "react-hot-toast";
import PostCard from "@/components/commun/PostCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import {
  CalendarIcon,
  EditIcon,
  FileTextIcon,
  HeartIcon,
  LinkIcon,
  MapPinIcon,
} from "lucide-react";
import { useEffect, useState } from "react";


type User = {
  id: string;
  username: string | null;
  name: string | null;
  profileImg: string | null;
  bio: string | null;
  website: string | null;
  location: string | null;
  createAt: string;
  _count: {
    posts: number;
    following: number;
    followers: number;
  }
}
// type PostProps = {
//   id: string;
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
//       username: string;
//       name: string | null;
//       id: string;
//       profileImg: string | null;
//     };
//   }[];
//   likes: {
//       userId: string,
//   }[];
//   _count: {
//       likes: number,
//       comments: number,
//   };
  
// }[];


interface ProfilePageClientProps {
  user: User;
  authImg: string | null;
  dbUserId: string | null;
  isFollowing: boolean;
}

function ProfilePageClient({
  isFollowing: initialIsFollowing,
  user,
  authImg,
  dbUserId,
}: ProfilePageClientProps) {

  const { user: currentUser } = useUser();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isUpdatingFollow, setIsUpdatingFollow] = useState(false);

  const [editForm, setEditForm] = useState({
    name: user.name || "",
    bio: user.bio || "",
    location: user.location || "",
    website: user.website || "",
    
  });

  const queryClient = useQueryClient();

  const { mutateAsync: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async ({authId, name, bio, location, website}: {authId:string, name: string, bio: string, location: string, website: string}) => {
      try {
        const resp = await fetch(`https://imppm-backend.onrender.com/publications/user/${authId}/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name, bio, location, website}),
        });

        const data = await resp.json();
        console.log("data: "+data.bio);
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    },
    onSuccess: () => {
      setShowEditDialog(false);
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["authUser"] }),
        queryClient.invalidateQueries({ queryKey: ["userProfile"] }),
      ]);
    },
  });
  

  const handleEditSubmit = async () => {
    console.log("Usuário:", user.username);
    const formData = new FormData();
    Object.entries(editForm).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if ( !currentUser ) return false;

    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const location = formData.get("location") as string;
    const website = formData.get("website") as string;
    
    updateProfile({authId: dbUserId!, name, bio, location, website});

    // const result = await updateProfile(user.username!, formData);
    // console.log({result})
    // if (result) {
    //   setShowEditDialog(false);
    //   // toast.success("Profile updated successfully");
    // }

  // 
  };


  const handleFollow = async () => {
    if (!currentUser) return;

    try {
      setIsUpdatingFollow(true);
      // await toggleFollow(user.id);
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error(error)
      // toast.error("Failed to update follow status");
    } finally {
      setIsUpdatingFollow(false);
    }
  };

  const isOwnProfile =
    currentUser?.username === user.username ||
    currentUser?.emailAddresses[0].emailAddress.split("@")[0] === user.username;
  
  const formattedDate = format(new Date(user.createAt), "MMMM yyyy");

  useEffect(() => {
    return;
  },[user, isFollowing]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="w-full max-w-lg mx-auto">
          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.profileImg ?? "/avatar.png"} />
                </Avatar>
                <h1 className="mt-4 text-2xl font-bold">{user.name ?? user.username}</h1>
                <p className="text-muted-foreground">@{user.username}</p>
                <p className="mt-2 text-sm">{user.bio}</p>

                {/* PROFILE STATS */}
                <div className="w-full mt-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="font-semibold">{user._count.following.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Seguir a</div>
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      <div className="font-semibold">{user._count.followers.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Seguidores</div>
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      <div className="font-semibold">{user._count.posts.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Posts</div>
                    </div>
                  </div>
                </div>

                {/* "FOLLOW & EDIT PROFILE" BUTTONS */}
                {!currentUser ? (
                  <SignInButton mode="modal">
                    <Button className="w-full mt-4">Seguir a</Button>
                  </SignInButton>
                ) : isOwnProfile ? (
                  <Button className="w-full mt-4" onClick={() => setShowEditDialog(true)}>
                    <EditIcon className="size-4 mr-2" />
                    Editar Prefil
                  </Button>
                ) : (
                  <Button
                    className="w-full mt-4"
                    onClick={handleFollow}
                    disabled={isUpdatingFollow}
                    variant={isFollowing ? "outline" : "default"}
                  >
                    {isFollowing ? "Deixar de seguir" : "Seguir"}
                  </Button>
                )}

                {/* LOCATION & WEBSITE */}
                <div className="w-full mt-6 space-y-2 text-sm">
                  {user.location && (
                    <div className="flex items-center text-muted-foreground">
                      <MapPinIcon className="size-4 mr-2" />
                      {user.location}
                    </div>
                  )}
                  {user.website && (
                    <div className="flex items-center text-muted-foreground">
                      <LinkIcon className="size-4 mr-2" />
                      <a
                        href={
                          user.website.startsWith("http") ? user.website : `https://${user.website}`
                        }
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.website}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="size-4 mr-2" />
                    Joined {formattedDate}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="posts"
              className="flex items-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary
               data-[state=active]:bg-transparent px-6 font-semibold cursor-pointer"
            >
              <FileTextIcon className="size-4" />
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="flex items-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary
               data-[state=active]:bg-transparent px-6 font-semibold cursor-pointer"
            >
              <HeartIcon className="size-4" />
              Likes
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="flex items-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary
               data-[state=active]:bg-transparent px-6 font-semibold cursor-pointer"
            >
              <HeartIcon className="size-4" />
              Seguindo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <PostCard feedType="posts" authImg={authImg} dbUserId={dbUserId} />
          </TabsContent>

          <TabsContent value="likes" className="mt-6">
            <PostCard feedType="likes" authImg={authImg} dbUserId={dbUserId} />
          </TabsContent>
          <TabsContent value="following" className="mt-6">
            <PostCard feedType="following" authImg={authImg} dbUserId={dbUserId} />
          </TabsContent>
        </Tabs>

        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Editar Perfil</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Nome</Label>
                <Input
                  name="name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Teu nome"
                />
              </div>
              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea
                  name="bio"
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="min-h-[100px]"
                  placeholder="Tell us about yourself"
                />
              </div>
              <div className="space-y-2">
                <Label>Localização</Label>
                <Input
                  name="location"
                  value={editForm.location}
                  onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                  placeholder="Where are you based?"
                />
              </div>
              <div className="space-y-2">
                <Label>Website</Label>
                <Input
                  name="website"
                  value={editForm.website}
                  onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                  placeholder="Your personal website"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button className="cursor-pointer" onClick={handleEditSubmit}> {isUpdatingProfile ? "Atualizando...": "Save Alteração"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default ProfilePageClient;
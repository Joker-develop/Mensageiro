"use client";


// import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeartIcon, MessageCircleIcon, UserPlusIcon } from "lucide-react";
import Image from "next/image";
import { NotificationsSkeleton } from "@/components/commun/NotificationSkeleton";
import { getNotifications, markNotificationsAsRead } from "@/actions/notification.action";

// type Notifications = Awaited<ReturnType<typeof getNotifications>>;
// type Notification = Notifications[number];

type NotificationPropes = {
    id: string;
    read: boolean;
    type: string;
    content: string | null;
    createAt: string;
    creator: {
        id: string;
        username: string;
        profileImg: string | null;
        name: string | null;
    },
    comment: {
      content: string;
      id: string;
      createAt: string;
    } | null,
    post: {
      id: string;
      postImage: string | null;
      content: string | null;
    } | null,
  }[]



const getNotificationIcon = (type: string) => {
  switch (type) {
    case "LIKE":
      return <HeartIcon className="size-4 text-red-500" />;
    case "COMMENT":
      return <MessageCircleIcon className="size-4 text-blue-500" />;
    case "FOLLOW":
      return <UserPlusIcon className="size-4 text-green-500" />;
    default:
      return null;
  }
};

function NotificationsPage({userName}: {userName:string}) {
  const [notifications, setNotifications] = useState<NotificationPropes>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      try {
        // const dataNotifications = [{
        //   id: "738",
        //   creator: {
        //       id: "0023",
        //       username: "usuario One",
        //       profileImg: "/imagens/avatar2.png",
        //       name: "User Jhon",
        //   },
        //   read: true,
        //   type: "LIKE",
        //   content: "Minha primeria publicação textando",
        //   image: "/exemplar 6.jpg",
        //   comment: {
        //     id: "89467",
        //     createAt: "2025-03-07T23:29:28.925Z",
        //     content: "Eu comentei GORA TEXTANDO",
        //   },
        //   post: {
        //     id: "34276f",
        //     postImage: "/exemplar 5.jpg",
        //     content: "Minha primeria publicação textando John Two",
        //   },
        //   createdAt: "2025-03-10T23:29:28.925Z",
        // }]
        const dataNotifications: NotificationPropes = await getNotifications(userName);
        setNotifications(dataNotifications);

        if ( dataNotifications ){
          const unreadIds: string[] = dataNotifications.filter(( items) => !items.read).map((itemsDiferentRead) => itemsDiferentRead.id);
          if (unreadIds.length > 0) await markNotificationsAsRead(userName);
        }
        // const unreadIds = dataNotifications.filter((n) => !n.read).map((n) => n.id);
        // if (unreadIds.length > 0) await markNotificationsAsRead(unreadIds);
      } catch (error) {
        console.error(error)
        // toast.error("Failed to fetch notifications");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, [userName]);


  if (isLoading) return <NotificationsSkeleton />;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle>Notificações</CardTitle>
            <span className="text-sm text-muted-foreground">
              { notifications && notifications.filter((n) => !n.read).length} não lida
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            { notifications.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">Não existe notificações de momento!</div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-4 border-b hover:bg-muted/25 transition-colors ${
                    !notification.read ? "bg-muted/50" : ""
                  }`}
                >
                  <Avatar className="mt-1">
                    <AvatarImage src={notification.creator.profileImg ?? "/avatar.png"} />
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      {getNotificationIcon(notification.type)}
                      <span>
                        <span className="font-medium">
                          {notification.creator.name ?? notification.creator.username}
                        </span>{" "}
                        {notification.type === "FOLLOW"
                          ? "começou a seguir você"
                          : notification.type === "LIKE"
                          ? "gostou do teu post"
                          : "comentou o seu post"}
                      </span>
                    </div>

                    {notification.post &&
                      (notification.type === "LIKE" || notification.type === "COMMENT") && (
                        <div className="pl-6 space-y-2">
                          <div className="text-sm text-muted-foreground rounded-md p-2 bg-muted/30 mt-2">
                            <p>{notification.post.content}</p>
                            {notification.post.postImage && (
                              <Image
                                height={1200}
                                width={1200}
                                src={notification.post.postImage}
                                alt="Post content"
                                className="mt-2 rounded-md w-full max-w-[200px] h-auto object-cover"
                              />
                            )}
                          </div>

                          {notification.type === "COMMENT" && notification.comment && (
                            <div className="text-sm p-2 bg-accent/50 rounded-md">
                              {notification.comment.content}
                            </div>
                          )}
                        </div>
                      )}

                    <p className="text-sm text-muted-foreground pl-6">
                      {formatDistanceToNow(new Date(notification.createAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              ))
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
export default NotificationsPage;
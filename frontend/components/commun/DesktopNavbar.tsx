"use client"

import { BellIcon, HomeIcon, AirplayIcon, SchoolIcon, UserIcon, RssIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import {  useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { User } from "@clerk/nextjs/server";


function DesktopNavbar() {
  const {user: userClerk} = useUser();
  const [user, updateUser] = useState <User | null>()

  useEffect(() => {
    return updateUser(userClerk as unknown as User);
  }, [userClerk])

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/about">
          <AirplayIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Quem somos</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/curso">
          <SchoolIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Cursos</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/publications">
          <RssIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Publicações</span>
        </Link>
      </Button>

      { user ? (
        <>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notificações</span>
            </Link>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link
              href={`/profile/${
                user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Perfil</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">Login</Button>
        </SignInButton>
      )}
    </div>
  );
}
export default DesktopNavbar;
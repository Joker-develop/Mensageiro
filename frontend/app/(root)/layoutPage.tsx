"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { JSX } from "react";

const LayoutPage = ({ children, Navbar }: { children: React.ReactNode, Navbar: JSX.Element }) => {
  const pathname = usePathname();
  //pathname === "/curso" ? "bg-[#e6e7e9]" : "bg-gradient-left dark:bg-gradient-left-dark" class main add
  //  pathname === "/curso" ? "snap-y snap-mandatory w-full h-screen overflow-scroll mt-0 pb-0" : "" claass div.overflow-scroll add
  return (
    <main className={cn("fixed left-0 right-0 top-0 bottom-0 mx-auto flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top bg-dark-100 px-5 xs:px-10 md:px-16 !p-0", pathname === "/curso" ? "bg-[#e6e7e9]" : "bg-gradient-left dark:bg-gradient-left-dark")}>
      <div className="relative mx-auto xl:max-w-full w-full h-screen overflow-scroll">
        {Navbar}
        {/*<Headers />*/}
        <div className={cn("fixed overflow-scroll top-0 m-0 w-full h-screen", pathname === "/curso" ? "snap-y snap-mandatory mt-0 pb-0" : "")}>
          {children}
        </div>
      </div>
    </main>
  );
}

export default LayoutPage;

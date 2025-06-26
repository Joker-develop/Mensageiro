"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderMobileWrapper from "./HeaderMobileWrapper";


const Headers = () => {
    const pathname = usePathname();
    const [showMobile, setShowMobile] = useState(false);

    const handleClickBtn = () => {
        setShowMobile(!showMobile);
    }

    return(
        <>
            <header className= {cn("my-10 flex justify-between items-center gap-5 fixed w-[90%] h-[65px] left-0 right-0 mt-0 mb-0 mr-auto ml-auto z-[10] bg-gradient-left dark:bg-gradient-left-dark  border-b border-primary/10 dark:border-primary-dark/10 pl-5 pr-5", pathname === "/curso" ? "bg-transparent backdrop-blur-[30px]" : "bg-gradient-left")}>
                <Link 
                    href={"/"}
                    className="text-blue-950"
                >
                    IMPPM
                </Link>
                <ul className="flex flex-row items-center gap-8 max-lg:hidden">
                    <li>
                        <Link
                            href={"/"}
                            className={
                                cn("text-base cursor-pointer capitalize", pathname === "/" ? "text-red-500 font-black border-b-red-500 border-b-[1px]" : "text-blue-950",)
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/about"}
                            className={
                                cn("text-base cursor-pointer capitalize", pathname === "/about" ? "text-red-500 font-black border-b-red-500 border-b-[1px]" : "text-blue-950",)
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/curso"}
                            className={
                                cn("text-base cursor-pointer capitalize", pathname === "/curso" ? "text-red-500 font-black border-b-red-500 border-b-[1px]" : "text-blue-950",)
                            }
                        >
                            Curso
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/news"}
                            className={
                                cn("text-base cursor-pointer capitalize", pathname === "/news" ? "text-red-500 font-black border-b-red-500 border-b-[1px]" : "text-blue-950",)
                            }
                        >
                            Publicações
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/login"}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
                <nav className=" flex justify-between items-center gap-2 min-lg:hidden">
                    <Link
                        href={"/login"}
                    >
                        Login
                    </Link>
                    <button onClick={handleClickBtn} aria-label="open menu" className="navbar_menuButton__BJwt4" type="button">
                        <div className={ showMobile ? "menu-toggle_expanded__YupKc" : "menu-toggle_wrap__qevaX"}></div>
                    </button>
                </nav>
            </header>
            {
                showMobile && <HeaderMobileWrapper />
            }
        </>
    )
}

export default Headers;
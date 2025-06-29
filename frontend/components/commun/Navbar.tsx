import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";
import { syncUser } from "@/actions/user.actions";
import { auth } from "@clerk/nextjs/server";

async function Navbar() {

  let contador = 1;

  const {userId} = await auth();

  if (userId){ 

    if ( contador == 1 ){
      await syncUser(); // POST
    }

    contador += 1;
  } else{ 
    contador = 1;
  }

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex text-xl font-bold text-primary font-mono tracking-wider">
              <Image src="/imagens/logo.png" width={30} height={30} className="w-[30px] h-[30px] mr-2.5" alt="logo" />
              IMPPM
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
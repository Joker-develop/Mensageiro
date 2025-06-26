

import Sidebar from "@/components/commun/SideBar";


//import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //const pathname = usePathname();
  
  return (
    <div className="py-8 mt-[40px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="hidden lg:block lg:col-span-3">
              <Sidebar />
            </div>
            <div className="lg:col-span-9">
              {children}
            </div>
          </div>
          {/* {<Toaster />} */}
        </div>
      </div>
  );
}

export default Layout;



import Navbar from "@/components/commun/Navbar";
import LayoutPage from "./layoutPage";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutPage Navbar={<Navbar />}  >
      { children }
    </LayoutPage>
  );
}

export default Layout;

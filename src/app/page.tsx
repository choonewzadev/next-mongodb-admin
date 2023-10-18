import StickyNavbar from "@/components/navbar/StickyNavbar";
import Configurator from "@/components/right-sidebar/configurator";
import Sidenav from "@/components/sidebar/Sidenav";
import { setOpenSidenav, useUIController } from "@/context/UIContext";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav/>
      <div className=" pb-4 md:ml-80">
        <StickyNavbar />
        <Configurator />
        <div>
         
        </div>
      </div>
    </div>
  );
}

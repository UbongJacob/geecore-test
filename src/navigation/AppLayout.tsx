import { Outlet } from "react-router-dom";

import SideBarNav from "./SideBarNav";

const AppLayout = (): JSX.Element => {
  return (
    <main className="relative p-2 flex h-screen w-screen overflow-hidden bg-gray-100  ">
      <SideBarNav />

      <div className=" flex flex-col flex-1   rounded-xl ">
        {/* <AppHeader /> */}
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;

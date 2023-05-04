import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { MdOutlineBusinessCenter, MdDashboard } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

import routes from "navigation/routes";
import ButtonLoader from "assets/animation/AnimatedButtonLoader";
import { useSidebarStore } from "store/sidebar.store";
import { useUserStore } from "store/user.store";

interface RouteData {
  icon: JSX.Element;
  title: string;
  route: string;
}

const routesData: RouteData[] = [
  {
    icon: <MdDashboard className="text-3xl" />,
    title: "Bar Chart",
    route: routes.DASHBOARD_LAYOUT,
  },
  {
    icon: <MdOutlineBusinessCenter className="text-3xl" />,
    title: "Pie Chart",
    route: routes.PIE_CHART,
  },
  {
    icon: <BiCategory className="text-3xl" />,
    title: "Line Chart",
    route: routes.LINE_CHART,
  },
  {
    icon: <BiCategory className="text-3xl" />,
    title: "OTHER",
    route: "#",
  },
  {
    icon: <BiCategory className="text-3xl" />,
    title: "OTHER",
    route: "#",
  },
];

const SideBarNav = (): JSX.Element => {
  const [activeTabTitle, setActiveTabTitle] = useState("");
  const { pathname } = useLocation();

  const { setUserDetails } = useUserStore();
  const navigate = useNavigate();
  const { isVisible, toggleVisibility } = useSidebarStore();

  const handleLogout = async () => {
    setUserDetails(undefined);
    navigate(routes.LOGIN_PAGE, { replace: true });
  };

  useEffect(() => {
    routesData.forEach(({ title, route }) => {
      if (pathname.includes(route)) setActiveTabTitle(title);
    });
    toggleVisibility();
  }, [pathname]);

  return (
    <aside
      className={`w-64 fixed xl:relative h-[90vh] z-[1000] bg-blue-950 p-4 rounded-xl text-white font-mono transition-all duration-700 overflow-y-auto -translate-x-[150%] xl:translate-x-0 ${
        isVisible && " translate-x-0 "
      } `}
    >
      <section className=" flex items-start justify-between">
        {/* <img
          src={Logo}
          className="w-10 ml-2 mt-2 mb-4"
          alt="logo"
          draggable={false}
        /> */}

        <ImCancelCircle
          onClick={toggleVisibility}
          className="text-orange-500 text-xl animate-pulse xl:hidden cursor-pointer"
        />
      </section>
      <nav className="h-[90%] flex flex-col justify-between">
        <ul>
          {routesData.map(({ icon, route, title }, index) => {
            return (
              <Link
                key={index}
                className={`flex gap-x-2 items-center  hover:bg-blue-300 transition-all hover:scale-105 p-2 rounded-lg my-3 ${
                  activeTabTitle === title && " bg-blue-500 "
                } `}
                to={route}
              >
                {icon}
                {title}
              </Link>
            );
          })}
        </ul>

        <button
          onClick={handleLogout}
          type="button"
          className={`w-full  p-3 flex gap-4 bg-orange-500 rounded-lg hover:scale-110 text-white transition-all ${
            false && " opacity-40  pl-5 "
          }`}
        >
          Logout
          {false && <ButtonLoader />}
        </button>
      </nav>
    </aside>
  );
};

export default SideBarNav;

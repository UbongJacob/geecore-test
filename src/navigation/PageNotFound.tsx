import { useNavigate } from "react-router-dom";

import { useNavigationHistoryStore } from "store/navigationHistoryStore";
import routes from "navigation/routes";

const PageNotFound = (): JSX.Element => {
  const { history } = useNavigationHistoryStore();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (history.length > 1) {
      navigate(-1);
    } else {
      window.location.replace(routes.HOME_PAGE);
    }
  };

  return (
    <main className=" min-h-screen flex flex-col items-center justify-center responsive-padx-container ">
      <h1 className=" text-2xl md:text-3xl font-bold">Sorry page not found</h1>

      <span className="text-lg md:text-xl font-semibold text-center">
        You might have wandered off track, let's get you back
        <button
          onClick={handleNavigation}
          className="btn btn-primary ml-3"
          type="button"
        >
          Home
        </button>
      </span>
    </main>
  );
};

export default PageNotFound;

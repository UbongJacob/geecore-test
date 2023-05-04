import AppRouter from "navigation/AppRouter";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// react toastify
import "react-toastify/dist/ReactToastify.min.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;

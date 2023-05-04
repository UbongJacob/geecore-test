import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./AppLayout";
import routes from "./routes";
import useEnhancedCustomRouterUtilities from "./useEnhancedCustomRouterUtilities";
import LoginPage from "pages/LoginPage";
import PageNotFound from "./PageNotFound";
import DashboardPage from "pages/DashboardPage";
import LineChartPage from "pages/LineChart";
import PieChartPage from "pages/PieChartPage";

const AppRouter = (): JSX.Element => {
  useEnhancedCustomRouterUtilities();
  return (
    <Routes>
      <Route path={routes.HOME_PAGE} element={<LoginPage />} />
      <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />

      <Route
        path={routes.DASHBOARD_LAYOUT}
        element={<Navigate to={routes.DASHBOARD_PAGE} />}
      />
      {/* Protect these routes */}
      <Route path={routes.DASHBOARD_LAYOUT} element={<AppLayout />}>
        <Route path={routes.DASHBOARD_PAGE} element={<DashboardPage />} />
        <Route path={routes.LINE_CHART} element={<LineChartPage />} />
        <Route path={routes.PIE_CHART} element={<PieChartPage />} />
      </Route>

      {/* 404 PAGE */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;

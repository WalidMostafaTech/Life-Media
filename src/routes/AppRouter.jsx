import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/layout/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;

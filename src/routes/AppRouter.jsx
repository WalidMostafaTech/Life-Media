import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";
import NotFound from "../pages/NotFound/NotFound";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const ContactUs = React.lazy(() => import("../pages/ContactUs/ContactUs"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const ProjectDetails = React.lazy(
  () => import("../pages/ProjectDetails/ProjectDetails"),
);
const Services = React.lazy(() => import("../pages/Services/Services"));
const NewPages = React.lazy(() => import("../pages/NewPages/NewPages"));
const SolutionsWeOffer = React.lazy(
  () => import("../pages/SolutionsWeOffer/SolutionsWeOffer"),
);

const NewLiveMediaPage = React.lazy(
  () => import("../pages/NewLiveMediaPage/NewLiveMediaPage"),
);
const SuccessStoryPage = React.lazy(
  () => import("../pages/SuccessStoryPage/SuccessStoryPage"),
);

const LatestVideosPage = React.lazy(
  () => import("../pages/LatestVideosPage/LatestVideosPage"),
);
const LatestDesignsPage = React.lazy(
  () => import("../pages/LatestDesignsPage/LatestDesignsPage"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "services", element: <Services /> },
      {
        path: "solution/:id",
        element: <SolutionsWeOffer />,
      },
      { path: "pages/:slug", element: <NewPages /> },

      { path: "new-live-media/:id", element: <NewLiveMediaPage /> },
      { path: "success-story/:id", element: <SuccessStoryPage /> },

      { path: "latest-videos", element: <LatestVideosPage /> },
      { path: "latest-designs", element: <LatestDesignsPage /> },

      {
        path: "*",
        element: <NotFound />,
      },
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

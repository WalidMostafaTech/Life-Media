import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/layout/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const ContactUs = React.lazy(() => import("../pages/ContactUs/ContactUs"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const ProjectDetails = React.lazy(() =>
  import("../pages/ProjectDetails/ProjectDetails")
);
const Services = React.lazy(() => import("../pages/Services/Services"));
const NewPages = React.lazy(() => import("../pages/NewPages/NewPages"));
const SolutionsWeOffer = React.lazy(() =>
  import("../pages/SolutionsWeOffer/SolutionsWeOffer")
);
const StoryDetails = React.lazy(() =>
  import("../pages/StoryDetails/StoryDetails")
);
const MediaStore = React.lazy(() => import("../pages/MediaStore/MediaStore"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "services", element: <Services /> },
      {
        path: "solutions-we-offer/:solution_id",
        element: <SolutionsWeOffer />,
      },
      { path: "pages/:slug", element: <NewPages /> },
      { path: "stories/:type/:id", element: <StoryDetails /> },
      { path: "media/:type", element: <MediaStore /> },
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

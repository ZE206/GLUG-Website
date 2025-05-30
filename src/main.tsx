import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RecommendedSoftware from "./components/Recommended_software/rec.tsx";
import Beginner from "./components/Beginner_tut/beg.tsx";

const NotFound = () => <div>404 - Page Not Found</div>;

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <div>About Page</div> },
  { path: "/contact", element: <div>Contact Page</div> },
  { path: "/recommended-software", element: <RecommendedSoftware /> },
  {path: "/beginner-tutorials", element: <Beginner />},
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

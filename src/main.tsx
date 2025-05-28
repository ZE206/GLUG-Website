import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Recommended_software from "./components/Recommended_software/rec";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <div>About Page</div> },
  { path: "/contact", element: <div>Contact Page</div> },
  { path: "/recommended-software", element: <Recommended_software /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

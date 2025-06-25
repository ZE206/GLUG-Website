import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AboutPage from "./pages/About.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecommendedSoftware from "./components/Recommended_software/rec.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import OpensourceProj from "./components/Opensource-projects/Opensource-projects.tsx";
import Beginner from "./components/Beginner_tut/beg.tsx";
import LIG from "./components/LinuxInstallationGuide/LIG.tsx";
const NotFound = () => (
    <div className="text-white absolute top-[50%] left-[50%] text-8xl font-bold -translate-1/2 text-nowrap">
        404 - Page Not Found
    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <App /> },
            { path: "about", element:<AboutPage/> },
            { path: "/recommended-software", element: <RecommendedSoftware /> },
            { path: "/opensource-projects", element: <OpensourceProj /> },
            { path: "/beginner-tutorials", element: <Beginner /> },
            { path: "/linux-guide", element: <LIG />},
            { path: "*", element: <NotFound /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

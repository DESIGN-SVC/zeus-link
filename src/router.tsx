import { createBrowserRouter } from "react-router-dom";
import { Loading } from "./Components/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => import("./Pages/layout-root"),
        hydrateFallbackElement: <Loading />,
        children: [
            { index: true, lazy: () => import("./Pages/Home") },
            { path: "/tickets", lazy: () => import("./Pages/Tickets") },
            { path: "*", lazy: () => import("./Pages/Home") },
        ],
    },
]);

import { createBrowserRouter } from "react-router-dom";
import Sign from "./pages/signup/signup";
import Property from "./pages/dashboard/property/property";
import Dashboard from "./pages/dashboard/dashboard";
import Overview from "./pages/dashboard/overview/overview";
export const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "property",
        element: <Property />,
      },
      {
        path: "watchlist",
        element: <div>I am a lamb</div>,
      },
      {
        path: "overview",
        element: <div>I am a lamb</div>,
      },
    ],
  },
  {
    path: "signup",
    element: <Sign />,
  },
]);

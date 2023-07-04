import { createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Sign from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import Overview from "./components/overview/overview";
export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "hey",
        element: <div>I am a hey</div>,
      },
      {
        path: "overview",
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

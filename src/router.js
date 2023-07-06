import { createBrowserRouter } from "react-router-dom";
import Sign from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import Overview from "./components/overview/overview";
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
        element: <div>I am a hey</div>,
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

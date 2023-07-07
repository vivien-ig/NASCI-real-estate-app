import { createBrowserRouter } from "react-router-dom";
import Sign from "./pages/signup/signup";
import Property from "./pages/dashboard/property/property";
import PropertyDetail from "./pages/dashboard/property/property-detail/property-detail";
import Dashboard from "./pages/dashboard/dashboard";
import Overview from "./pages/dashboard/overview/overview";
import News from "./pages/dashboard/news/news";
import Watchlist from "./pages/dashboard/watchlist/watchlist";
import NewsNewsDetail from "./pages/dashboard/news/news-detail/news-detail";
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
        path: "property/:id",
        element: <PropertyDetail />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsNewsDetail />,
      },
      {
        path: "watch-list",
        element: <Watchlist />,
      },
    ],
  },
  {
    path: "signup",
    element: <Sign />,
  },
  {
    path: "/*",
    element: (
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="error"
      >
        CANT FIND THIS PAGE
      </div>
    ),
  },
]);

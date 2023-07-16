import { createBrowserRouter } from "react-router-dom";
import Sign from "./pages/signup/signup";
import Property from "./pages/dashboard/property/property";
import PropertyDetail from "./pages/dashboard/property/property-detail/property-detail";
import Dashboard from "./pages/dashboard/dashboard";
import Overview from "./pages/dashboard/overview/overview";
import News from "./pages/dashboard/news/news";
import Watchlist from "./pages/dashboard/watchlist/watchlist";
import Estimator from "./pages/dashboard/estimator/estimator";
import NewsNewsDetail from "./pages/dashboard/news/news-detail/news-detail";
import Map from "./pages/dashboard/map/map";
import MarketTrends from "./pages/dashboard/market-trends/market-trends";
import Settings from "./pages/dashboard/settings/settings";
import HelpSupport from "./pages/dashboard/help-support/help-support";
import ProtectedRoute from "./protectedRoute";
import Filter from "./components/modals/filter/filter";
import Subscribe from "./components/modals/subscribe/subscribe";
export const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "filter",
    element: <Filter />,
  },
  {
    path: "subscribe",
    element: <Subscribe />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "property",
        element: <Property />,
        children: [
          {
            path: ":propertyId",
            element: <PropertyDetail />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "market-trends",
        element: <MarketTrends />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "news/:id",
        element: <NewsNewsDetail />,
      },
      {
        path: "watch-list",
        element: <Watchlist />,
      },
      {
        path: "estimator",
        element: <Estimator />,
      },

      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "help-support",
        element: <HelpSupport />,
      },
    ],
  },
  {
    path: "signup",
    element: <Sign isRegister={true} />,
  },
  {
    path: "signin",
    element: <Sign isRegister={false} />,
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

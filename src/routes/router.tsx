import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home Page/HomePage";
import NoFoundPage from "../pages/No Found/NoFoundPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CarListing from "../pages/Listing/CarListing";
// import DashboardLayout from "../Layout/Dashboard Layout/DashboardLayout";
// import PaymentSuccess from "../pages/Payment Success & Failed/PaymentSuccess";
// import AdminDashboard from "../Layout/Admin Dashboard/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "listing",
        element: <CarListing />,
      },
    ],
  },

  // {
  //   path: "admin",
  //   element: <DashboardLayout />,
  //   errorElement: <NoFoundPage />,
  //   children: [
  //     {
  //       path: "all-products-management",
  //       element: <AllProductManagement />,
  //     },

  //   ],
  // },

  {
    path: "/login",
    element: <Login />,
    errorElement: <NoFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NoFoundPage />,
  },
]);

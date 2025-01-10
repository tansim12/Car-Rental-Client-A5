import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home Page/HomePage";
import NoFoundPage from "../pages/No Found/NoFoundPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CarListing from "../pages/Listing/CarListing";
import CarDetails from "../pages/Car Details/CarDetails";
import { adminRoutes } from "./route.admin";
import MainLayout from "../Layout/Dashboard Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import { userRoutes } from "./route.user";
import AboutUs from "../pages/About/AboutUs";
import PaymentCancelPage from "../pages/Payment pages/PaymentCancelPage";
import PaymentSuccessPage from "../pages/Payment pages/PaymentSuccessPage";
import PaymentFailed from "../pages/Payment pages/PaymentFailed";

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
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "payment-cancel",
        element: <PaymentCancelPage />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccessPage />,
      },
      {
        path: "/payment-failed",
        element: <PaymentFailed />,
      },
      {
        path: "car-details/:id",
        element: <CarDetails />,
      },
     
    ],
  },

  //   admin routes
  {
    path: "/admin",
    element: (
      <PrivateRoute role="admin">
        <MainLayout />
      </PrivateRoute>
    ),
    children: adminRoutes,
  },
  // //   student routes
  {
    path: "/user",
    element: (
      <PrivateRoute role="user">
        <MainLayout />
      </PrivateRoute>
    ),
    children: userRoutes,
  },

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

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home Page/HomePage";
import NoFoundPage from "../pages/No Found/NoFoundPage";
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
      // {
      //   path: "all-products",
      //   element: <AllProducts />,
      // },
     
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
]);

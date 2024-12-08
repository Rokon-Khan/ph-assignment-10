import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";
import AddNewCampaign from "../pages/AddNewCampaign";
import AllCampaign from "../pages/Allcampaign";
import Error from "../pages/Error";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: async () => await fetch("http://localhost:5000/addnewcampaign"),
        loader: async () => {
          const response = await fetch("http://localhost:5000/addnewcampaign");
          const data = await response.json();
          return data; // Ensure the data is an array of campaigns
        },
      },
    ],
  },

  {
    path: "/allcampaign",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/allcampaign",
        element: <AllCampaign></AllCampaign>,
        // loader: () => fetch("http://localhost:5000/addnewcampaign"),
        loader: async () => {
          const response = await fetch("http://localhost:5000/addnewcampaign");
          const data = await response.json();
          return data; // Ensure the data is an array of campaigns
        },
      },
    ],
  },
  {
    path: "/mycampaign",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/mycampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/mydonation",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/mydonation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/addnewcampaign",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/addnewcampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>,
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },

  //   {
  //     path: "/dashboard",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: (
  //           <PrivateRoute>
  //             <Dashboard></Dashboard>
  //           </PrivateRoute>
  //         ),
  //       },
  //     ],
  //   },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  //   {
  //     path: "/update-profile",
  //     element: <UpdateProfile></UpdateProfile>,
  //   },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export { router };

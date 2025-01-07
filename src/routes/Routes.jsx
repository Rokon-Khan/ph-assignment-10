import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import AddNewCampaign from "../pages/AddNewCampaign";
import AllCampaign from "../pages/AllCampaign";
import ContactUs from "../pages/ContactUs";
import CookiePolicy from "../pages/CookiePolicy";
import DetailCampain from "../pages/DetailCampain";
import Error from "../pages/Error";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCampaign from "../pages/MyCampaigns";
import MyDonation from "../pages/MyDonation";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Register from "../pages/Register";
import TermsOfUse from "../pages/TermsOfUse";
import UpdateCampaign from "../pages/updateCampaign";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: async () => await fetch("https://ph-assignment-server-10.vercel.app/addnewcampaign"),
        loader: async () => {
          const response = await fetch(
            "https://ph-assignment-server-10.vercel.app/addnewcampaign"
          );
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
        // loader: () => fetch("https://ph-assignment-server-10.vercel.app/addnewcampaign"),
        loader: async () => {
          const response = await fetch(
            "https://ph-assignment-server-10.vercel.app/addnewcampaign"
          );
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
        loader: async () => {
          const response = await fetch(
            "https://ph-assignment-server-10.vercel.app/addnewcampaign"
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "/updateCampaign",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign />,
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            "https://ph-assignment-server-10.vercel.app/addnewcampaign"
          );
          const data = await response.json();
          return data;
        },
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
    path: "/detailcampaign",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/detailcampaign:id",
        element: (
          <PrivateRoute>
            <DetailCampain></DetailCampain>,
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            "https://ph-assignment-server-10.vercel.app/addnewcampaign"
          );
          const data = await response.json();
          return data;
        },
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
        loader: () => fetch("https://ph-assignment-server-10.vercel.app/users"),
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
    path: "/terms-of-use",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/terms-of-use",
        element: <TermsOfUse></TermsOfUse>,
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
  {
    path: "/cookie-policy",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/cookie-policy",
        element: <CookiePolicy></CookiePolicy>,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/about-us",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },

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

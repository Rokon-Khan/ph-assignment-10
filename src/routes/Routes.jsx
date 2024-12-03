import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";
import Error from "../pages/Error";

import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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

  //   {
  //     path: "/login",
  //     element: <Login></Login>,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register></Register>,
  //   },
  //   {
  //     path: "/forget-password",
  //     element: <ForgetPassword></ForgetPassword>,
  //   },
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

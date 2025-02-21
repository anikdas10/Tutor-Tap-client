import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authetication/Login";
import Registration from "../Authetication/Registration";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import PrivateRoutes from "./PrivateRoutes";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorDetails from "../components/TutorDetails/TutorDetails";
import MyBookTutors from "../Pages/MyBookTutors/MyBookTutors";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import UpdateTutorial from "../Pages/UpdateTutorial/UpdateTutorial";
import TutorsByCategory from "../Pages/TutorsByCategory/TutorsByCategory";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Registration />,
      },
      {
        path: "/addTutorials",
        element: (
          <PrivateRoutes>
            <AddTutorials />
          </PrivateRoutes>
        ),
      },
      {
        path: "/find-tutors",
        element: <FindTutors />,
      },
      {
        path: "/find-tutors/:category",
        element: <TutorsByCategory/>,
      },
      {
        path: "/tutor/:details",
        element: (
          <PrivateRoutes>
            <TutorDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-booked-tutors",
        element: (
          <PrivateRoutes>
            <MyBookTutors />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-tutorials",
        element:<PrivateRoutes>
          <MyTutorials/>
        </PrivateRoutes>
      },
      {
        path:"/update/:id",
        element:<PrivateRoutes>
          <UpdateTutorial/>
        </PrivateRoutes>
      }
    ],
  },
]);
export default router;
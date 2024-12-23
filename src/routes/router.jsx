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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path:"/find-tutors",
        element:<FindTutors/>
      },
      {
        path:"/tutor/:details",
        element:<PrivateRoutes>
          <TutorDetails/>
        </PrivateRoutes>
      },
      {
        path:"/my-booked-tutors",
        element:<MyBookTutors/>
      }
    ],
  },
]);
export default router;
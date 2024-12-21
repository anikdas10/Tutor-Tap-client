import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authetication/Login";
import Registration from "../Authetication/Registration";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:'/signUp',
        element:<Registration/>
      },
      {
        path:"/addTutorials",
        element:<AddTutorials/>
      }
    ],
  },
]);
export default router;
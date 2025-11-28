import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home";
import Blogs from "../components/pages/Blogs";
import BestPlace from "../components/pages/BestPlace";
import About from "../components/pages/About";
import Details from "../components/homepgItem/Details";
import BlogsDetails from "../components/pages/BlogsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/best-places',
        element: <BestPlace />,
      },
      {
        path:'/about',
        element:<About/>,
      }

    ]
  },
{
  path:'/details',
  element:<Details/>
},
{
  path:'/blog-details',
  element:<BlogsDetails/>
}


]);
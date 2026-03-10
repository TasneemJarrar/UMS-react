import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Users from "./pages/Users/Users";

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<MainLayout />,
      children:[
      {
        index:true,
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/users',
        element: <Users />
      }
    ]
    }


  ]
)

export default router;



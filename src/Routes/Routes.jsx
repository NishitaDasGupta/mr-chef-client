import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../components/layout/Main"
import Home from "../components/pages/Home/Home/Home";
import Blog from "../components/pages/Home/Blog/Blog";
import Register from "../components/pages/Home/Register/Register";
import Login from "../components/pages/Home/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
  
]);
export default router;
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../components/layout/Main"
import Home from "../components/pages/Home/Home/Home/Home";
import Blog from "../components/pages/Home/Blog/Blog";
import Register from "../components/pages/Home/Register/Register";
import Login from "../components/pages/Home/Login/Login";
import ErrorPage from "../components/pages/Home/ErrorPage/ErrorPage";
import ChefSection from "../components/pages/Home/ChefSection/ChefSection";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('https://mr-chef-server-nishitadasgupta.vercel.app/recipes')
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
            },
            {
                path: "/chefs/:id",
                element: <PrivateRoute><ChefSection></ChefSection></PrivateRoute>,
                loader: ({params})=> fetch(`https://mr-chef-server-nishitadasgupta.vercel.app/chefs/${params.id}`)
            },
        ]
    },
  
]);
export default router;
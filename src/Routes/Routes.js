import { createBrowserRouter } from "react-router-dom";
import EditReview from "../Components/EditReview";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Myreviwes from "../Pages/Myreviews/Myreviwes";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/details/:id',
                loader : ({params})=>fetch(`https://awesome-photography-server.vercel.app/services/${params.id}`),
                element:<ServiceDetails/>
            },
            {
                path:'/myReviews',
                element:<PrivateRoutes><Myreviwes/></PrivateRoutes>
            },
            {
                path:'/myReviews/edit/:id',
                element:<EditReview/>
            },
            {
                path:'/addService',
                element:<PrivateRoutes><AddService/></PrivateRoutes>
            }
        ]
    }
])
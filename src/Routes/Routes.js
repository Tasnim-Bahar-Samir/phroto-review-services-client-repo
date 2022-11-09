import { createBrowserRouter } from "react-router-dom";
import EditReview from "../Components/EditReview";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Myreviwes from "../Pages/Myreviews/Myreviwes";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

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
                loader : ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<ServiceDetails/>
            },
            {
                path:'/myReviews',
                element:<Myreviwes/>
            },
            {
                path:'/myReviews/edit/:id',
                element:<EditReview/>
            }
        ]
    }
])
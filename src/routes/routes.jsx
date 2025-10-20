import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Categories from "../components/categories/Categories";
import CategoriesNews from "../pages/CategoriesNews";
const router = createBrowserRouter(
    [

{
     path: "/",
      element: <HomeLayout> </HomeLayout>,
children:[
    {
        path: "",
        element:<Home></Home>
    },
    {
        path: "/category/:id",
        element:<CategoriesNews></CategoriesNews>,
        loader: ()=> fetch("/news.json")
    },
    
]
},
{
    path: "/auth",
    element: <h2>Auth layout</h2>
},
{
    path: "/news",
    element: <h2>News layout</h2>
},
{
    path: "/*",
    element: <h2>Error 404</h2>
},




    ]);

export default router;
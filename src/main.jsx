import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Root/ErrorPage.jsx';
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import BrandAdd from './BrandAdd.jsx';
import AddProduct from './AddProduct.jsx';
import Products from './Products/Products.jsx';
import ProDetails from './Products/ProDetails';
import UpdateProduct from './UpdateProduct';
import AuthProvider from './AuthProvider';
import Login from './Login';
import Register from './Register';
import MyCart from './MyCart';
import PrivateRout from './PrivateRout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=>fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/brands'),

      },
      
      {
        path:"/AddProduct",
        element:<PrivateRout><AddProduct></AddProduct></PrivateRout>
      },
      {
        path:"/Products/:_Brand",
        element:<Products></Products>,
        loader: ()=>fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/products')
      },
      {
        path:"/product/:_id",
        element:<PrivateRout><ProDetails></ProDetails></PrivateRout>,
        loader: ()=>fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/products')
      },
      {
        path:"/Update/:id",
        element:<PrivateRout><UpdateProduct></UpdateProduct></PrivateRout>,
        loader: ({params})=>fetch(` https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/products/${params.id}`)
      },
      {
        path:"/Login",
        element:<Login></Login>,
        loader: ()=>fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/users')
        
      },
      {
        path:"/Register",
        element:<Register></Register>
      },
      {
        path:"/MyCart",
        element:<PrivateRout><MyCart></MyCart></PrivateRout>,
        loader: ()=>fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/users')
      }
     

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)

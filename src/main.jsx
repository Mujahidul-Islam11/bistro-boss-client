import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Root";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import AuthProvider from "./Pages/AuthProvider";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Pages/PrivateRoute";
import Secret from "./Pages/Secret";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import AllUsers from "./Pages/AllUsers";
import AddItems from "./Pages/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "./Pages/ManageItems";
import UpdateItem from "./Pages/UpdateItem";
import Payment from "./Pages/Payment";
import SurveyForm from "./Pages/SurveyForm";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'bookings',
        element: <AdminRoute><SurveyForm></SurveyForm></AdminRoute>
      },
      {
        path: 'updateItems/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },
      ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Layout/Layout.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import Home from './Pages/Home.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Profile from './Pages/Profile.jsx';
import ProtectedRoute from './privateRoutes/ProtectedRoute.jsx';
import Notification from './Pages/Notification.jsx';
import DashBoard from './Pages/DashBoard.jsx';
import WorkSpace from './Pages/WorkSpace.jsx';
import Task from './Pages/Task.jsx';
import Employee from './Pages/Employee.jsx';
import Users from './Pages/users.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/users',
        element: <Users></Users>
      },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile></Profile></ProtectedRoute>
      },
      {
        path: '/notification',
        element: <Notification></Notification>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/workspace',
        element: <WorkSpace></WorkSpace>
      },
      {
        path: '/task',
        element: <Task></Task>
      },
      {
        path: '/employee',
        element: <Employee></Employee>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)

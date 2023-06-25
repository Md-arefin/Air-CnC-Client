import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../components/Dashboard/DashboardLayout'
import Main from '../layouts/Main'
import AddRoom from '../pages/AddRoom/AddRoom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      },
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/add-room',
        element: <AddRoom></AddRoom> ,
      }
    ]
  }
])

import React, { useEffect } from 'react'

import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/UserSlice'
const Body = () => {
  const dispatch=useDispatch()
 
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Reload the user data to fetch the latest profile information
        user.reload().then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        });
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  
  return (
   <>
   <RouterProvider router={appRouter}/>
   </>
  )
}

export default Body

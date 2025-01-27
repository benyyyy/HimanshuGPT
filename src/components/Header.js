import React, { useEffect } from 'react'

import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {LOGO} from '../utils/constants'


import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/UserSlice'

const Header = () => {
  const navigate = useNavigate();
    const dispatch=useDispatch()
  const user=useSelector(store=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
    
      })
      .catch((error) => {
        navigate("/error");
      });
  };



  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // Reload the user data to fetch the latest profile information
        user.reload().then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        });
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    //unsubscribe when component unmount 
    return ()=>unsubscribe()
  }, []);


  return (
<>
<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className='w-44' src={LOGO}
        alt='logo'
    />
  { user&&( <div className='flex p-2'>
      <img      className="hidden md:block w-12 h-12" alt='usericon'  src={user?.photoURL}/>
   <button onClick={handleSignOut} className="font-bold text-white ">(Sign Out)</button>
   <p>{user?.displayName}</p>
    </div>
    
    )}
    </div>
</>
  )
}

export default Header

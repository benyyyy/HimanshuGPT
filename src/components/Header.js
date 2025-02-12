import React, { useEffect } from 'react'

import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {LOGO, SUPPORTED_LANGUAGES} from '../utils/constants'


import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/UserSlice'
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
    const dispatch=useDispatch()
  const user=useSelector(store=>store.user)

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
    
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
<>
<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className='w-44' src={LOGO}
        alt='logo'
    />
  { user&&( <div className='flex p-2'>
  

    {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((e) => (
                <option key={e.identifier} value={e.identifier}>
                  {e.name}
                </option>
              ))}
            </select>
          )}
  <button   className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>
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

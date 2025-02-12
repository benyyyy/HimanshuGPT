import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import GptSearch from './GptSearch'
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

useNowPlaying()
usePopularMovies()
useUpcomingMovies()
useTopratedMovies()
  return (
   <>
    <Header/>
    {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    {/* mainContainer
    -videobackground
    --video title
    secondary mainContainer
    -movieLiser*N
    -CARDS*n */}
    
   
 
   </>
  )
}

export default Browse

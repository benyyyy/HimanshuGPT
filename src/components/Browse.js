import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'


const Browse = () => {
useNowPlaying()
usePopularMovies()
useUpcomingMovies()
useTopratedMovies()
  return (
   <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    {/* mainContainer
    -videobackground
    --video title
    secondary mainContainer
    -movieLiser*N
    -CARDS*n */}
    
   
    <h2>browse</h2>
   </>
  )
}

export default Browse

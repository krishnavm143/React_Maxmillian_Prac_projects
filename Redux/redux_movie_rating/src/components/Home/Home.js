import React, { Fragment, useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])
  return (
    <Fragment>
      <div className='banner-img'></div>
      <MovieListing />
    </Fragment>
  )
}

export default Home
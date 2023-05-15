import React, { Fragment, useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/movieapi'
import { APIKey } from '../../common/MovieApiKey'
const Home = () => {

  useEffect(() => {
    const movieText = 'harry'
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch(err=>{
        console.log('Error',err)
      })
      console.log("The Response from API",response)
    }

    fetchMovies()
  }, [])
  return (
    <Fragment>
      <div className='banner-img'></div>
      <MovieListing />
    </Fragment>
  )
}

export default Home
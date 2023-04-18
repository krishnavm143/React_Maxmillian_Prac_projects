import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await fetch(`https://fetch-app-7d637-default-rtdb.firebaseio.com/movies.json`, {
        method: "get"
      })

      if (!response.ok) {
        throw new Error('Somethin went Wrong')
      }
      const data = await response.json()
      console.log(data)

      const loadingMovies=[]

      for(const key in data){
        loadingMovies.push({
          id:key,
          title:data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        })
      }
      // console.log(loa)
      // const transformedData = data?.results?.map(movieData => {
      //   return {
      //     id: movieData?.episode_id,
      //     title: movieData?.title,
      //     releaseDate: movieData?.release_date,
      //     openingText: movieData?.opening_crawl
      //   }
      // })
      setMovies([...loadingMovies])
      // setIsLoading(false)

    } catch (error) {
      console.log(error.message)
      setError(error.message)

    }
    setIsLoading(false)
  }, [])
  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  let content = <p>No Movies Found</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>....Loading....</p>
  }

  async function addMovieHandler(movie) {
    // console.log(movie)
    const response = await fetch(`https://fetch-app-7d637-default-rtdb.firebaseio.com/movies.json`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data =await response.json()

    console.log('respinse post',data)
  }


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {console.log(movies)}
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

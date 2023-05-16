import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/movieapi'
import { APIKey } from '../../common/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMoves',
    async () => {
        const movieText = 'harry'

        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)

        return response?.data
    })

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const seriesText = 'Friends'

        const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)

        return response.data
    }
)
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail',
    async (id) => {

        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)

        return response.data


    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload
        // },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fetched Successfully');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log(' Movies fetched Successfully', payload);
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log(' Particular fetched Successfully', payload);
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})

// export const { addMovies } = movieSlice.actions
export const { removeSelectedMovieOrShow } = movieSlice.actions

export const getAllMovies = state => state.movies.movies

export const getAllShows = state => state.movies.shows

export const getSelectedMovieShow = state => state.movies.selectedMovieOrShow

export default movieSlice.reducer;


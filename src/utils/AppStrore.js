import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './MoviesSlice'
import userReducer from './UserSlice'
const appStore=configureStore({
    reducer: {
        user:userReducer,
        movies:moviesReducer,
    },
});
export default appStore;
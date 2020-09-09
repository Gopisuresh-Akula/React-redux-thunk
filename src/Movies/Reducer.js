import {  GET_MOVIES,GET_MOVIE, RESET_MOVIE } from "./Actions";



const INITIAL_STATE = {
  
    Movies:[],
    isMoviesLoaded:false,
    Movie:[],
    isMovieLoaded:false
};
 
 const MovieReducer =(state = INITIAL_STATE, action) => {
const {data}=action

    switch (action.type) {
    
            case GET_MOVIES:
            return {...state, Movies:data,isMoviesLoaded:true}
            case GET_MOVIE:
            return {...state, Movie:data,isMovieLoaded:true}
            case RESET_MOVIE:
                return {...state, Movie:{},isMovieLoaded:false}
        default:
            return state
    }
}
export default MovieReducer
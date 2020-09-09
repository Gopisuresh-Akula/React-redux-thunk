
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const RESET_MOVIE='RESET_MOVIE'
export const getMovies = () => {
  return async (dispatch) => {
    const Res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ac79f02ad78d416cdde11b89e561391a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const Movies = await Res.json();
    return dispatch({
      type: GET_MOVIES,
      data: Movies.results,
    });
  };
};


export const getMovie = (id) => {
  return async (dispatch) => {
    const Res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac79f02ad78d416cdde11b89e561391a&language=en-US`);
    const Movie = await Res.json();
    return dispatch({
      type: GET_MOVIE,
      data: Movie,
    });
  };
};

export const Reset_movie = () => {
  return {
    type: RESET_MOVIE,
  };
};
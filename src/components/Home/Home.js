import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const doNotReload = location.state?.doNotReload ?? false;
  console.log("params are ", doNotReload);
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    let isLoaded = false;
    if (!isLoaded && !doNotReload) {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
    }

    return () => {
      isLoaded = true;
    };
  }, [dispatch, doNotReload]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

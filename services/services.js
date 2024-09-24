import axios from 'axios';
import { URL, API_KEY } from '../config/const';

/**
 * @param - "search" which we get from the search bar, 
 * @returns - if the "search" is empty then we fetch the list of movies from the movie/popular route of 
 * TMDB API which will give us a list of current popular movies,
 * else we fetch the data of searched movie.
*/

export const fetchMovies = async (search) => {
  try {
    if (!search) {
      const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`)
      return [...response.data.results];
    } else {
      const response = await axios.get(
        `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
      )
      return [...response.data.results];
    }
  } catch(error) {
    if (!search) {
      console.error("Error while fetching Movies Data :: ", error)
    } else {
      console.error(`Error while fetching Movies Data for Movie ${search}::`, error)
    }
    return []
  }
};

/**
 * @param - "id" which will be used for fetching cast and crew of the movie.
 * @returns -  the name of the director and the list of crew and cast which we will use later in this article
*/
export const fetchCredits = async (id) => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}/credits?api_key=${API_KEY}`
    )
      
    const director = response.data.crew.find(
      (dir) => dir.known_for_department === 'Directing'
    );
    const credits = response.data;
    return { director: director, credits: credits };
  } catch(error) {
    console.error(`Error while fetching Details for Movie ${id}::`, error)
    return {}
  }
};

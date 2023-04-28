import axios from 'axios';

const API_KEY = '5f7559859986b78c33527b478befbc82';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
};
export const getMovieDetailsById = id => {
  return axios
    .get(
      `
${BASE_URL}movie/${id}?api_key=${API_KEY}`
    )
    .then(response => response.data);
};
export const getCastById = id => {
  return axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
};
export const getReviewsById = id => {
  return axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
};
export const searchMovieByKeyword = keyword => {
  return axios.get(`
${BASE_URL}search/movie?query=${keyword}&api_key=${API_KEY}`);
};

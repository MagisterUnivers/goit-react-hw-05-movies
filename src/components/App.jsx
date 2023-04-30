import React from 'react';
import { Layout } from './Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Cast from 'pages/Cast';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDet from 'pages/MoviesDet';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>Hello, about</h1>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies-list" element={<Navigate to="/movies" />} />
          <Route path="movies/:id" element={<MoviesDet />}>
            <Route
              index
              element={<h1> Натисни на кнопку подивитись пости</h1>}
            />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

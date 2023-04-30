import React, { lazy, Suspense } from 'react';
import { Layout } from './Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const Cast = lazy(() => import('pages/Cast'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDet = lazy(() => import('pages/MoviesDet'));
const Reviews = lazy(() => import('pages/Reviews'));
const SearchBar = lazy(() => import('pages/SearchBar'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="searchbar"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SearchBar />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Movies />
              </Suspense>
            }
          />
          <Route path="movies-list" element={<Navigate to="/movies" />} />
          <Route
            path="movies/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesDet />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <h1> Click "Cast" or "Reviews" to see more information</h1>
              }
            />
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import LoaderSpin from './components/Loader/LoaderSpin';

const HomePage = lazy(() =>
  import('./Pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    './Pages/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Pages/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundView = lazy(() =>
  import('./Pages/NotFoundView.js' /* webpackChunkName: "not-found-page" */),
);

function App() {
  return (
    <Container>
      <AppBar />
      <ToastContainer theme="colored" autoClose={2000} />
      <Suspense fallback={<LoaderSpin />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

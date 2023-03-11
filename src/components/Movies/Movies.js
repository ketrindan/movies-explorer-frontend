
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies'
import Footer from '../Footer/Footer';

import {movies} from '../../utils/movies'

function Movies(props) {
  return (
    <section className="movies">
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <SearchForm />
      <MoviesCardList isLoading={false} isSavedMovies={false} movies={movies}/>
      <MoreMovies />
      <Footer />
    </section>
  )
}

export default Movies;
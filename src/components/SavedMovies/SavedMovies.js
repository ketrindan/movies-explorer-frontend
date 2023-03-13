import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import {movies} from '../../utils/movies'

function SavedMovies(props) {
  return (
    <section className="movies">
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <SearchForm />
      <MoviesCardList isLoading={false} isSavedMovies={true} movies={movies}/>
      <Footer />
    </section>
  )
}

export default SavedMovies;
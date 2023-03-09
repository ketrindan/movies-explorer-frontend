
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies(props) {
  return (
    <section className="movies">
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <SearchForm />
      <Footer />
    </section>
  )
}

export default Movies;
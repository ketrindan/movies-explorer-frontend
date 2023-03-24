import './MoviesCard.css';

import convertDuration from '../../utils/utils';

function MoviesCard(props) {

  function handleDeleteMovie() {
    props.onDeleteMovie(props.movie);
  }

  function handleSaveMovie() {
    props.onSaveMovie(props.movie);
  }

  return (
    <article className="movie">
      <div className="movie__container">
        <div className="movie__info">
          <h3 className="movie__name">{props.movie.nameRU}</h3>
          <p className="movie__duration">{convertDuration(props.movie.duration)}</p>
        </div>
        {props.isSavedMovies ? (
          <button className="movie__btn movie__btn_delete" onClick={handleDeleteMovie} />
        ) : (
          <button className={`movie__btn ${props.isSaved ? 'movie__btn_saved' : 'movie__btn_save'}`} onClick={handleSaveMovie} />
        )}
      </div>
      <a href={props.movie.trailerLink} target="blank">
        <img className="movie__image" alt={`Постер фильма ${props.movie.nameRU}`} src={props.isSavedMovies ?
            props.movie.image :
            `https://api.nomoreparties.co/${props.movie.image.url}`} />
      </a>
    </article>
  )
}

export default MoviesCard;
import './MoviesCard.css';

function MoviesCard(props) {
  const cardSaveButtonClassName = (
    `movie__btn ${props.movie.saved ? 'movie__btn_saved' : 'movie__btn_save'}`
  );

  return (
    <article className="movie">
      <div className="movie__container">
        <div className="movie__info">
          <h3 className="movie__name">{props.movie.name}</h3>
          <p className="movie__duration">{props.movie.duration}</p>
        </div>
        {props.isSavedMovies ? (
          <button className="movie__btn movie__btn_delete" />
        ) : (
          <button className={cardSaveButtonClassName} />
        )}
      </div>
      <img className="movie__image" alt={`Постер фильма ${props.movie.name}`} src={props.movie.image} />
    </article>
  )
}

export default MoviesCard;
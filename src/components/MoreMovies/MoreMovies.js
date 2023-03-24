import './MoreMovies.css';

function MoreMovies(props) {
  return (
    <section className="more">
      <button type="button" className="more__btn" onClick={props.onClick}>Еще</button>
    </section>
  )
}

export default MoreMovies;
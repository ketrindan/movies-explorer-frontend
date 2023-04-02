import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <section className="filter">
      <input type="checkbox" id="checkbox" className="filter__checkbox" 
        onChange={props.onChange} checked={props.shortMoviesSelected} />
      <label className="filter__label" htmlFor="checkbox">Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox;
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className="filter">
      <input type="checkbox" id="checkbox" className="filter__checkbox" />
      <label className="filter__label" htmlFor="checkbox">Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox;
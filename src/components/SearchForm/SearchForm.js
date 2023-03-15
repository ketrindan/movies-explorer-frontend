import React from 'react';

import './SearchForm.css';
import '../FilterCheckbox/FilterCheckbox';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" type="text"
        placeholder="Фильм" required/>
        <button className="search__submit-btn" type="button" />
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;
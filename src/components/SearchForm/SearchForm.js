import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';
import '../FilterCheckbox/FilterCheckbox';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../../hooks/useForm';

function SearchForm(props) {
  const location = useLocation();
  const [error, setError] = useState('');

  const { values, isValid, onChange } = useForm({
    searchRequest: "",
  })

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      setError('Нужно ввести ключевое слово');
      return
    } else {
      props.onSubmit(values.searchRequest, props.shortMoviesSelected)
    }
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('searchRequest')) {
      const searchValue = localStorage.getItem('searchRequest');
      values.searchRequest = searchValue;
    }
  }, [location]);

  useEffect(() => {
    if (isValid) {
      setError('');
    }
  }, [isValid]);

  return (
    <section className="search">
      <form className="search__form" noValidate onSubmit={handleSearchSubmit}>
        <input className="search__input" type="text"
          placeholder="Фильм" required name="searchRequest" 
          value={values.searchRequest} onChange={onChange} 
        />
        <button className="search__submit-btn" type="submit" />
      </form>
      <span className={"search__error " + (error ? "search__error_active" : "")}>{error}</span>

      <FilterCheckbox 
        onChange={props.onCheckboxClick}
        shortMoviesSelected={props.shortMoviesSelected}
      />
    </section>
  )
}

export default SearchForm;
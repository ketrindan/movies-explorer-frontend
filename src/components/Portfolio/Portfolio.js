import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/ketrindan/how-to-learn" target="blank">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/ketrindan/russian-travel" target="blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/ketrindan/react-mesto-api-full" target="blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
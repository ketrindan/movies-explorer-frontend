import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <span className="footer__copyright">&#xA9; 2022</span>
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <a className="footer__link" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__link" href="Github" target="blank">Github</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;
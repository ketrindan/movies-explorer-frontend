import React from 'react';

import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__menu">
        <li className="navtab__item"><a className="navtab__link" href="#aboutProject">О проекте</a></li>
        <li className="navtab__item"><a className="navtab__link" href="#techs">Технологии</a></li>
        <li className="navtab__item"><a className="navtab__link" href="#aboutme">Студент</a></li>
      </ul>
    </section>
  )
}

export default NavTab;
import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__container">
        <div className="aboutProject__box">
          <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__description">
            Составление плана, работу над бэкендом, 
            вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__box">
          <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__description">
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__timeline">
        <p className="aboutProject__time aboutProject__time_black">1 неделя</p>
        <p className="aboutProject__time">4 недели</p>
        <p className="aboutProject__stage">Back-end</p>
        <p className="aboutProject__stage">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
import React from 'react';

import photo from '../../images/photo.jpg'
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__info">
          <div className="aboutme__info-box">
            <h3 className="aboutme__subtitle">Екатерина</h3>
            <span className="aboutme__job">Начинающий фронтенд-разработчик, 26 лет</span>
            <p className="aboutme__description">
              Я родилась в Краснодаре, живу в Москве. Закончила экономический факультет МГУ им. М.В. Ломоносова.
              Яндекс-практикум - мой первый опыт программирования.
              В свободное время люблю читать книги, заниматься спортом.
            </p>
          </div>  
          <a className="aboutme__link" href="https://github.com/ketrindan" target="blank">Github</a>
        </div>
        <img className="aboutme__photo" src={photo} alt="фото" />
      </div>
    </section>
  )
}

export default AboutMe;
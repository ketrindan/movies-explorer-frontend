import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__error">404</h1>
        <p className="not-found_text">Страница не найдена</p>
      </div>
      <button className="not-found__btn">Назад</button>
    </section>
  )
}

export default NotFoundPage;
import { useEffect } from "react";

import './InfoTooltip.css';
import okImage from '../../images/okUnion.svg'
import notOkImage from '../../images/notokUnion.svg'

function InfoTooltip(props) {
  useEffect(() => {
    if (!props.isOpen) return;

    function closeByEscape(e) {
      if (e.key === 'Escape') {
        props.onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape)
   
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [props.isOpen, props.onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      {props.onClose()}
    }
  };

  return (
    <div
      className={`infotooltip ${props.isOpen ? "infotooltip_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className='infotooltip__container'>
        <button type="button" className="infotooltip__close-btn" aria-label="close"
          onClick={props.onClose}
        />
        <img className="infotooltip__image" src={props.isSuccessful ? okImage : notOkImage} alt={props.isSuccessful ? "Успех!" : "Ошибка :("} />
        <h3 className="infotooltip__message">{props.message}</h3>
      </div>
    </div>
  )
}

export default InfoTooltip;
import React from "react";
import "./styles/ModalCard.css";
import "./styles/ResidentCard.css";

const ModalCard = ({ isOpen, onClose, residentInfo }) => {
  if (!isOpen) return null;

  const residentStatus = {
    Alive: "alive-status",
    Dead: "dead-status",
    unknown: "unknown-status",
  };

  return (
    <section className="modal-overlay" onClick={onClose}>
      <section className="modal-content" onClick={(e) => e.preventDefault()}>
        <div>
          <img
            className="resident-image"
            src={residentInfo.image}
            alt={residentInfo.name}
          />
          <div className="modal-wrapper-status">
            <div
              className={`modal-circle-status ${
                residentStatus[residentInfo.status]
              }`}
            ></div>
            {residentInfo.status}
          </div>
        </div>

        <h3 className="resident-info-name">{residentInfo.name}</h3>
        <ul className="resident-info-list">
          <li className="resident-list">
            <b className="resident-info-bold">Especie: </b>
            <p className="resident-info-p">{residentInfo.species}</p>
          </li>
          <li className="resident-list">
            <b className="resident-info-bold">Origin: </b>
            <p className="resident-info-p">{residentInfo.origin.name}</p>
          </li>
          <li className="resident-list">
            <b className="resident-info-bold">Times appear: </b>
            <p className="resident-info-p">{residentInfo.episode.length}</p>
          </li>
        </ul>
        <button className="modal-close-button" onClick={onClose}>
          Close Card
        </button>
      </section>
    </section>
  );
};

export default ModalCard;

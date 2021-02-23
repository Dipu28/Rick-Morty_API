import React from "react";
import "../stylesheets/modal.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  if (props.characterInfo === undefined) {
    return (
      <aside className="modal">
        <Link className="modal--link" to="/">
          <i className="fas fa-chevron-left"></i> Volver
        </Link>
        <p className="modal--text">Aquí no hay nada</p>
      </aside>
    );
  } else {
    return (
      <aside className="aside">
        <div className="modal">
          <div>
            <Link className="modal--link" to="/">
              <i className="fas fa-chevron-left"></i> Volver
            </Link>
            <img
              className="modal--img"
              src={props.characterInfo.photo}
              alt={props.characterInfo.name}
            />
          </div>
          <div className="modal--text">
            <h4>{props.characterInfo.name}</h4>
            <p>{`Status: ${props.characterInfo.status}`}</p>
            <p>{`Specie: ${props.characterInfo.species}`}</p>
            <p>{`Origen: ${props.characterInfo.origin}`}</p>
          </div>
        </div>
      </aside>
    );
  }
};
export default CharacterDetail;

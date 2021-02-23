import React from "react";
import "../stylesheets/card.scss";
import Popup from "reactjs-popup";

const CharacterCard = (props) => {
  if (props.character.species === "Alien") {
    props.character.species = props.character.species + "👽";
  }
  if (
    props.character.gender === "Female" &&
    props.character.species === "Human"
  ) {
    props.character.species = "Human 👩";
  }
  if (props.character.species === "Human") {
    props.character.species = "Human 👦";
  }
  if (props.character.status === "Alive") {
    props.character.status = "Alive 🤘";
  }
  if (
    props.character.gender === "Female" &&
    props.character.status === "Dead"
  ) {
    props.character.status = "Dead 💀";
  }
  if (props.character.status === "Dead") {
    props.character.status = "Dead 💀";
  }
  if (props.character.status === "unknown") {
    props.character.status = "Stranger";
  }
  if (
    props.character.origin === "Earth (C-137)" ||
    props.character.origin === "Earth (Replacement Dimension)"
  ) {
    props.character.origin = "Earth";
  }
  if (props.character.origin === "unknown") {
    props.character.origin = "Stranger";
  }
  return (
    <Popup
      trigger={
        <li className="card" key={props.character.id}>
          <div
            title="Ver detalles"
            className="card--link"
            to={`/character/${props.character.id}`}
          >
            <div className="card-img">
              <img
                className="card--img__photo"
                src={props.character.photo}
                alt={props.character.name}
              />
            </div>
            <div className="card--text">
              <h3> {props.character.name}</h3>
              <p> {props.character.species}</p>
            </div>
          </div>
        </li>
      }
      position="center"
    >
      {(close) => (
        <div>
          <li className="photo" key={props.character.id}>
            <div
              title="Ver detalles"
              className="photo--link"
              to={`/character/${props.character.id}`}
            >
              <div className="photo-img">
                <img
                  className="photo--img__photo"
                  src={props.character.photo}
                  alt={props.character.name}
                />
              </div>

              <div className="photo--text">
                <h4>{props.character.name}</h4>
                <p>{`Status: ${props.character.status}`}</p>
                <p>{`Specie: ${props.character.species}`}</p>
                <p>{`Origen: ${props.character.origin}`}</p>
              </div>
            </div>
          </li>
        </div>
      )}
    </Popup>
  );
};
export default CharacterCard;

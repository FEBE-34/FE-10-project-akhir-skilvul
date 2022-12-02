import "../assets/css/ProgramFavorite.css";

import React from "react";

import { NavLink } from "react-router-dom";

const ProgramFavoriteCard = (props) => {
  return (
    <div className="program-favorirte-container">
      <div className="program-card">
        <img src={props.imgsrc} alt="img" />
        <h2 className="program-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <NavLink to={props.view} className="btn">
              View
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramFavoriteCard;

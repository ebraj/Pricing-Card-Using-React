import React from "react";
import "./CardContainer.scss";
import CardItem from "./CardItem";

const CardContainer = () => {
  return (
    <div className="card__container">
      <CardItem applyGradient="blueGradient" />
      <CardItem applyGradient="purpleGradient" />
      <CardItem applyGradient="orangeGradient" />
    </div>
  );
};

export default CardContainer;

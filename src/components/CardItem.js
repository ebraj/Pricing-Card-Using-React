import React from "react";
import "./CardItem.scss";

const CardItem = (props) => {
  const { objProp } = props;
  const { level, applyGradient, price, para1, para2, btnDark } = objProp;
  return (
    <div className="card__item">
      <div className={`card__item--title ${applyGradient}`}>
        <h2>{level}</h2>
      </div>
      <div className="card__item--pricing">
        <div>
          <h1>${price}/mo</h1>
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
      <div className="card__item--btn-ul">
        <button className={btnDark ? "btn-dark" : "btn-outline"}>
          GET STARTED
        </button>
        <ul>
          <li>3 new projects/month</li>
          <li>Basic Interaction</li>
          <li>Assets Library</li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;

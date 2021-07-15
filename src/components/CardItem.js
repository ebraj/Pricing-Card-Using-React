import React from "react";
import "./CardItem.scss";

const CardItem = () => {
  return (
    <div className="card__item">
      <div className="card__item--title">
        <h2>FREE</h2>
      </div>
      <div className="card__item--pricing">
        <div>
          <h1>$0/mo</h1>
          <p>Great For Staters</p>
          <p>Discover how to create your first projects.</p>
        </div>
      </div>
      <div className="card__item--btn-ul">
        <button>GET STARTED</button>
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

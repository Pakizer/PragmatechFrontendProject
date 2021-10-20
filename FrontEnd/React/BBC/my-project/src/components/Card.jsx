import React from "react";
import "./News.css";

function Card({ imgSrc, title, content, category, onClick }) {
  return (
    <div className="content">
      <div className="content__img">
        <img src={imgSrc} alt="Image" />
      </div>
      <div className="content__header">
        <h3 className="content__title" onClick={onClick}>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="content__desc">
        <p className="content__summary">{content}</p>
      </div>
      <span className="category__name">
        <a href="#">{category}</a>
      </span>
    </div>
  );
}

export default Card;

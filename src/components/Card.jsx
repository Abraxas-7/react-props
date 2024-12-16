import React from "react";
import styles from "../styles/Card.module.css";

function Card({ post }) {
  return (
    <div className={`card ${styles["my-card"]}`}>
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.content} </p>
      </div>
    </div>
  );
}

export default Card;

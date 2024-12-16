import React from "react";
import Pill from "./Pill.jsx";
import styles from "../styles/Card.module.css";

function Card({ post }) {
  return (
    <div className={`card ${styles["my-card"]}`}>
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.content} </p>
        <div className="d-flex flex-wrap">
          {post.tags.map((tag) => (
            <Pill key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

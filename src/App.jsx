import { useState } from "react";

import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

import styles from "./styles/App.module.css";

import posts from "./data/posts.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          {posts
            .filter((post) => post.published)
            .map((post) => (
              <Card post={post} key={post.id} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

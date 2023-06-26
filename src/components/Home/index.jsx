import React from "react";

import Head from "../../Help/Head";
import Feed from "../Feed";

import "./styles.css";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;

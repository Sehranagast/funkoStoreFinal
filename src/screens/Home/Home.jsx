import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <h1 className="home__main-title">Página de inicio</h1>
      <img
        src="https://worldfantasy.com.ar/wp-content/uploads/2020/09/pop-1.png"
        alt="funko-store-banner"
        title="funko"
      />
    </div>
  );
};

export { Home };

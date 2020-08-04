import React from "react";
import Slider from "./Slider";
import InfinitePosts from "./Post/InfinitePosts";
import HomeAbout from "./HomeAbout";

const Home = () => {

  return (
    <div className="home">
      <header className="home__header">
        <Slider />
      </header>
      <section className="home__about">
        <HomeAbout />
      </section>
      <section className="home__posts">
        <div className="home__posts__title">
          <h2>Najnowsze posty</h2>
        </div>
        <InfinitePosts className={"home__posts__container"} />
      </section>
    </div>
  );
};

export default Home;

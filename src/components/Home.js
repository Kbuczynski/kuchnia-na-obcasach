import React, { useEffect } from "react";
import Slider from "./Slider";
import InfinitePosts from "./Post/InfinitePosts";
import HomeAbout from "./HomeAbout";
import GoogleAd from "./GoogleAd";

const Home = () => {
  useEffect(() => {
    document.title = `Kuchnia na obcasach`;
  }, []);

  return (
    <div className="home">
      <header className="home__header">
        <Slider />
      </header>
      <section className="home__banner">
        <GoogleAd
          slot={9637134563}
          className={`home__banner__ad`}
          format={`auto`}
        />
      </section>
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

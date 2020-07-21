import React from "react";
import Slider from "./Slider";
import InfinitePosts from "./Post/InfinitePosts";

const Home = () => {

  return (
    <div className="home">
      <header className="home__header">
        <Slider />
      </header>
      <main className="home__posts">
        <div className="home__posts__title">
          <h2>Najnowsze posty</h2>
        </div>
        <InfinitePosts className={"home__posts__container"} />
      </main>
    </div>
  );
};

export default Home;

import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Post = lazy(() => import("./components/Post/Post"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Home = lazy(() => import("./components/Home"));
const CategoryPosts = lazy(() => import("./components/Post/CategoryPosts"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY,
      pageY = window.innerHeight;

    if (scrollY > pageY) setShowScroll(true);
    else setShowScroll(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <BrowserRouter>
      <Navigation />

      {showScroll && <ScrollToTop />}

      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/o-mnie" component={About} />
          <Route exact path="/kontakt-i-wspolpraca" component={Contact} />
          <Route
            exact
            path="/wpisy/:slug"
            render={(props) => <Post {...props} />}
          />
          <Route
            exact
            path="/kategorie/:slug"
            render={(props) => <CategoryPosts {...props} type={"category"} />}
          />
          <Route
            exact
            path="/tagi/:slug"
            render={(props) => <CategoryPosts {...props} type={"tag"} />}
          />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { API } from "./data";
import CookiesAlert from "./components/CookiesAlert";

const Post = lazy(() => import("./components/Post/Post"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Home = lazy(() => import("./components/Home"));
const CategoryPosts = lazy(() => import("./components/Post/CategoryPosts"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cookies = lazy(() => import("./components/Cookies"));

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [postsNumber, setPostsNumber] = useState(0);
  const [isAcceptCookie, setIsAcceptCookie] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY,
      pageY = window.innerHeight;

    if (scrollY > pageY) setShowScroll(true);
    else setShowScroll(false);
  };

  window.addEventListener("scroll", handleScroll);

  const getPostsNumber = async () => {
    let ENDPOINT = `${API}posts`;

    try {
      const response = await fetch(ENDPOINT);

      if (!response.ok) return;

      setPostsNumber(parseInt(response.headers.get("X-WP-Total"), 10));
    } catch {
      return;
    }
  };

  useEffect(() => {
    getPostsNumber();

    if (!sessionStorage.getItem("countPosts") && postsNumber !== 0) 
        sessionStorage.setItem("countPosts", JSON.stringify(postsNumber));
  });

  const handleCookies = () => {
    localStorage.setItem("cookies", "true");
    setIsAcceptCookie(true);
  }

  return (
    <BrowserRouter>
      <Navigation />
      {!localStorage.getItem("cookies") && !isAcceptCookie && <CookiesAlert handleCookies={handleCookies}/>}
      {showScroll && <ScrollToTop />}

      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/o-mnie" component={About} />
          <Route exact path="/kontakt-i-wspolpraca" component={Contact} />
          <Route exact path="/polityka-plikow-cookies" component={Cookies} />
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

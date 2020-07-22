import React, { useState, useEffect } from "react";
import { API } from "../../data";
import Preloader from "../Preloader";
import PostPrev from "./PostPrev";

const RandomPosts = ({ postId }) => {
  const [data, setData] = useState({
    posts: [],
    isLoading: true,
    countPosts: 0,
  });

  useEffect(() => {
    const loadPosts = async () => {
      let randomOffset = 0;

      if (sessionStorage.getItem("countPosts")) {
        randomOffset = Math.floor(Math.random() * (JSON.parse(sessionStorage.getItem("countPosts")) - 2));
      } else randomOffset = 0;

      const ENDPOINT = `${API}posts?per_page=${3}&offset=${randomOffset}`;

      try {
        const response = await fetch(ENDPOINT);

        if (!response.ok) return;
        setData({
          posts: await response.json(),
          isLoading: false,
          countPosts: parseInt(response.headers.get("X-WP-Total"), 10),
        });
      } catch {
        return;
      }
    };

    loadPosts();
  }, [postId]);

  return (
   <>
      {data.isLoading ? (
        <Preloader />
      ) : data.posts.length === 0 ? (
        <p>Brak postów</p>
      ) : (
        data.posts.map((post, index) => {
          return (
            <PostPrev key={index} post={post} />
          );
        })
      )}
    </>
  );
};

export default RandomPosts;

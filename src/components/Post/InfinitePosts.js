import React, { useEffect, useState, useRef } from "react";
import { API, POSTS_PER_PAGE } from "../../data";
import Preloader from "../Preloader";
import PostPrev from "./PostPrev";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const InfinitePosts = ({ className, type = "home", categoryId = 0 }) => {
  const TIMEOUT = 3000;
  const postsContainer = useRef();

  const [data, setData] = useState({
    posts: [],
    isLoading: true,
    countPosts: 0,
  });
  const [offset, setOffset] = useState(0);
  const [newVisit, setNewVisit] = useState(true);
  const [timeoutId, setTimeoutId] = useState(0);
  const [isError, setIsError] = useState(false);
  const [oldId, setOldId] = useState(categoryId);

  const addOffset = () => setOffset(offset + POSTS_PER_PAGE);

  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
      const currentTimeoutId = setTimeout(addOffset, TIMEOUT);
      setTimeoutId(currentTimeoutId);
    }
  });

  useEffect(() => {
    if (type !== "home") {
      setData({ posts: [], isLoading: true, countPosts: 0 });
      setOffset(0);
    }
  }, [categoryId, type]);

  useEffect(() => {
    if (type === "home") {
      if (sessionStorage.getItem(`${type}`) && newVisit) {
        const cachedData = JSON.parse(sessionStorage.getItem(`${type}`));
        setData({
          posts: [...cachedData.posts],
          isLoading: false,
          countPosts: JSON.parse(sessionStorage.getItem("countPosts")),
        });
        setOffset(cachedData.posts.length);
      }
    } 
  }, [newVisit, type]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const loadPosts = async () => {
      let ENDPOINT = `${API}posts?per_page=${POSTS_PER_PAGE}&offset=${offset}`;

      if (type === "category") ENDPOINT += `&categories=${categoryId}`;
      else if (type === "tag") ENDPOINT += `&tags=${categoryId}`;

      try {
        const response = await fetch(ENDPOINT, {
          signal: signal,
        });

        if (!response.ok) return;

        if (isError) setIsError(false);

        setData({
          posts: [...data.posts, ...(await response.json())],
          isLoading: false,
          countPosts: parseInt(response.headers.get("X-WP-Total"), 10),
        });
      } catch {
        setIsError(true);
      }
    };

    if (!isError) {
      if (!data.isLoading && data.countPosts === data.posts.length) return;

      if (data.posts.length <= data.countPosts) {
        if (categoryId !== oldId) {
          setOldId(categoryId);
          window.location.reload();
        }
        intersectionObserver.observe(postsContainer.current);

        if (type === "home") {
          if (!sessionStorage.getItem(`${type}`)) loadPosts();
          else if (!newVisit) loadPosts();
        } else {
          loadPosts();
          setNewVisit(false);
        }
      }

      if (sessionStorage.getItem(`${type}`) && newVisit) setNewVisit(false);
    }

    return () => {
      abortController.abort();
      intersectionObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [offset]);

  const handleCache = () => {
    type === "home" && sessionStorage.setItem(`${type}`, JSON.stringify(data));
    clearTimeout(timeoutId);
  };

  return (
    <div className={className} ref={postsContainer}>
      {data.isLoading ? (
        <Preloader />
      ) : data.posts.length === 0 ? (
        <p>Brak postów</p>
      ) : (
        data.posts.map((post, index) => {
          return (
            <LazyLoadComponent key={index}>
              <PostPrev post={post} handleCache={handleCache} />
            </LazyLoadComponent>
          );
        })
      )}
    </div>
  );
};

export default InfinitePosts;
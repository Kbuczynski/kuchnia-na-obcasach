import React, { useEffect, useState, useRef } from "react";
import { API, POSTS_PER_PAGE } from "../../data";
import Preloader from "../Preloader";
import PostPrev from "./PostPrev";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import GoogleAd from "../GoogleAd";

const InfinitePosts = ({ className, type = "home", categoryId = 0 }) => {
  const TIMEOUT = 1000;
  const postsContainer = useRef();

  const [data, setData] = useState({
    posts: [],
    pinnedPosts: [],
    isLoading: true,
    countPosts: 0,
  });
  const [offset, setOffset] = useState(0);
  const [newVisit, setNewVisit] = useState(true);
  const [timeoutId, setTimeoutId] = useState(0);
  const [isError, setIsError] = useState(false);

  const addOffset = () => setOffset(offset + POSTS_PER_PAGE);

  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
      const currentTimeoutId = setTimeout(addOffset, TIMEOUT);
      setTimeoutId(currentTimeoutId);
    }
  });

  useEffect(() => {
    if (type !== "home") {
      setData({ posts: [], pinnedPosts: [], isLoading: true, countPosts: 0 });
      setOffset(0);
    }
  }, [categoryId, type]);

  useEffect(() => {
    if (type === "home") {
      if (sessionStorage.getItem(`${type}`) && newVisit) {
        const cachedData = JSON.parse(sessionStorage.getItem(`${type}`));
        setData({
          posts: [...cachedData.posts],
          pinnedPosts: [...cachedData.pinnedPosts],
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
      let ENDPOINT_PINNED_POSTS = `${API}posts?sticky=1&per_page=100`;
      let ENDPOINT = `${API}posts?per_page=${POSTS_PER_PAGE}&offset=${offset}&sticky=0`;

      if (type === "category") {
        ENDPOINT_PINNED_POSTS += `&categories=${categoryId}`;
        ENDPOINT += `&categories=${categoryId}`;
      } else if (type === "tag") {
        ENDPOINT_PINNED_POSTS += `&tags=${categoryId}`;
        ENDPOINT += `&tags=${categoryId}`;
      }

      try {
        const response = await fetch(ENDPOINT, {
          signal: signal,
        });
        const responsePinnedPosts = await fetch(ENDPOINT_PINNED_POSTS, {
          signal: signal,
        });

        let newPosts = [];
        let pinnedPosts = [];

        if (response.ok) {
          newPosts = await response.json();
        }

        if (responsePinnedPosts.ok) {
          pinnedPosts = await responsePinnedPosts.json();
        }

        if (isError) setIsError(false);

        const newPinnedPosts = pinnedPosts.filter(
          (pinnedPost) => !data.pinnedPosts.some((p) => p.id === pinnedPost.id)
        );

        setData({
          posts: [...data.posts, ...newPosts],
          pinnedPosts: [...data.pinnedPosts, ...newPinnedPosts],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const handleCache = () => {
    type === "home" && sessionStorage.setItem(`${type}`, JSON.stringify(data));
    clearTimeout(timeoutId);
  };

  return (
    <div className={className}>
      {data.isLoading ? (
        <Preloader />
      ) : data.posts.length === 0 ? (
        <p>Brak postów</p>
      ) : (
        <>
          {type === "home"
            ? data.pinnedPosts?.map((pinnedPost, index) => {
                if (index % 4 === 0 && index !== 0) {
                  return (
                    <React.Fragment key={pinnedPost.id}>
                      <LazyLoadComponent>
                        <GoogleAd
                          slot={7242566208}
                          className={`postPrev`}
                          format={`fluid`}
                        />
                      </LazyLoadComponent>
                      <LazyLoadComponent>
                        <PostPrev post={pinnedPost} handleCache={handleCache} />
                      </LazyLoadComponent>
                    </React.Fragment>
                  );
                }
                return (
                  <LazyLoadComponent key={pinnedPost.id}>
                    <PostPrev post={pinnedPost} handleCache={handleCache} />
                  </LazyLoadComponent>
                );
              })
            : null}
          {data.posts.map((post, index) => {
            if (index % 4 === 0 && index !== 0) {
              return (
                <React.Fragment key={post.id}>
                  <LazyLoadComponent key={index}>
                    <GoogleAd
                      slot={7242566208}
                      className={`postPrev`}
                      format={`fluid`}
                    />
                  </LazyLoadComponent>
                  <LazyLoadComponent key={post.id}>
                    <PostPrev post={post} handleCache={handleCache} />
                  </LazyLoadComponent>
                </React.Fragment>
              );
            }
            return (
              <LazyLoadComponent key={post.id}>
                <PostPrev post={post} handleCache={handleCache} />
              </LazyLoadComponent>
            );
          })}
        </>
      )}
      <div ref={postsContainer}></div>
    </div>
  );
};

export default InfinitePosts;

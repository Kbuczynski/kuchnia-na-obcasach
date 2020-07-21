import React, { useState, useEffect, Suspense, lazy } from "react";
import { Redirect } from "react-router-dom";
import { API } from "../../data";
import Preloader from "../Preloader";
const PostContent = lazy(() => import("./PostContent"));

const Post = ({
  match: {
    params: { slug },
  },
}) => {
  const [data, setData] = useState({
    post: [],
    isLoading: true,
  });

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(`${API}posts?slug=${slug}`);
        if (!response.ok) await setData({ post: [], isLoading: false });
        setData({
          post: await response.json(),
          isLoading: false,
        });
      } catch {
        await setData({ post: [], isLoading: false });
      }
    };

    loadPosts();
  }, [slug]);

  if (!data.isLoading && data.post.length === 0)
    return <Redirect to={{ pathname: "/404" }} />;

  return (
    <>
      {data.isLoading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<Preloader />}>
          <PostContent post={data.post[0]} />
        </Suspense>
      )}
    </>
  );
};

export default Post;

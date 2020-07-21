import React from "react";
import { Link } from "react-router-dom";

const PostArrows = ({ postPrev, postNext }) => {
  const handleView = () => window.scrollTo(0,0);

  return (
    <>
      {postPrev !== null && (
        <Link
          to={`/wpisy/${postPrev.slug}`}
          className="postContent__another__prev"
          onClick={handleView}
        >
          <i className="icon-prev-post"></i>Poprzedni post
        </Link>
      )}
      {postNext !== null && (
        <Link
          to={`/wpisy/${postNext.slug}`}
          className="postContent__another__next"
          onClick={handleView}
        >
          Następny post<i className="icon-next-post"></i>
        </Link>
      )}
    </>
  );
};

export default PostArrows;

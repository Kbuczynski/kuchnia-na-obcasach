import React, { useState, useEffect } from "react";
import prettierTitle from "../../functions/prettierTitle";
import changeDateType from "../../functions/changeDateType";
import { Link } from "react-router-dom";
import { API } from "../../data";
import Preloader from "../Preloader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PostPrev = ({ post, handleCache }) => {
  const [image, setImage] = useState({ images: [], isLoading: true });

  useEffect(() => {
    if (sessionStorage.getItem(`image-${post.id}`)) {
      setImage({ images: JSON.parse(sessionStorage.getItem(`image-${post.id}`)), isLoading: false });
      return;
    }

    const loadImage = async () => {
      try {
        const response = await fetch(`${API}media?parent=${post.id}`);
        if (!response.ok) return;

        const data = await response.json();


        sessionStorage.setItem(`image-${post.id}`, JSON.stringify(data));
        setImage({ images: data, isLoading: false });
      } catch {
        return;
      }
    };

    loadImage();
  }, [post]);

  return (
    <Link to={`/wpisy/${post.slug}`} className="postPrev" onClick={handleCache}>
      <div className="postPrev__content">
        {image.isLoading ? (
          <Preloader />
        ) : image.images[0] !== undefined &&
          image.images[0].media_details.sizes.large === undefined ? (
          <LazyLoadImage
            alt={image.images[0].slug}
            height={image.images[0].media_details.sizes.full.height}
            src={image.images[0].media_details.sizes.full.source_url}
            width={image.images[0].media_details.sizes.full.width}
            effect="blur"
          />
        ) : (
          image.images[0] !== undefined && (
            <LazyLoadImage
              alt={image.images[0].slug}
              height={image.images[0].media_details.sizes.large.height}
              src={image.images[0].media_details.sizes.large.source_url}
              width={image.images[0].media_details.sizes.large.width}
              effect="blur"
            />
          )
        )}
      </div>
      <h3 className="postPrev__title">{prettierTitle(post.title.rendered)}</h3>
      <p className="postPrev__date">
        {changeDateType(post.date)}&nbsp;<i className="icon-calendar"></i>
      </p>
    </Link>
  );
};

export default PostPrev;

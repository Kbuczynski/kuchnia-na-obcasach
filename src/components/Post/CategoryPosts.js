import React, { useEffect, useState, Suspense, lazy } from "react";
import { Redirect } from "react-router-dom";
import { API } from "../../data";
import Preloader from "../Preloader";

const InfinitePosts = lazy(() => import("./InfinitePosts"));

const CategoryPosts = ({
  match: {
    params: { slug },
  },
  type = "tag",
}) => {
  const [data, setData] = useState({ category: [], isLoading: true });

  useEffect(() => {
    let ENDPOINT = `${API}`;

    if (type === "category") ENDPOINT += "categories";
    else ENDPOINT += "tags";

    ENDPOINT += `?slug=${slug}`;

    const getCategory = async () => {
      try {
        const response = await fetch(ENDPOINT);

        if (!response.ok) return;

        setData({ category: await response.json(), isLoading: false });
      } catch {
        return;
      }
    };

    getCategory();
  }, [slug, type]);

  if (!data.isLoading && data.category.length === 0)
    return <Redirect to={{ pathname: "/404" }} />;

  return (
    <div className="categoryPosts">
      <div className="categoryPosts__title">
        <h3>
          Wyszukałeś posty z {type === "category" ? "kategorii" : "tagiem"}{" "}
          <span>{!data.isLoading && data.category[0].name}</span>
        </h3>
      </div>
      {data.isLoading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<Preloader />}>
          <InfinitePosts
            className={"categoryPosts__container"}
            type={type}
            categoryId={data.category[0].id}
          />
        </Suspense>
      )}
    </div>
  );
};

export default CategoryPosts;

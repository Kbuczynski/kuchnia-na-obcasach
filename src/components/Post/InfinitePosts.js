import React, {useEffect, useState, useRef} from "react";
import {API, POSTS_PER_PAGE} from "../../data";
import Preloader from "../Preloader";
import PostPrev from "./PostPrev";
import {LazyLoadComponent} from "react-lazy-load-image-component";

const InfinitePosts = ({className, type = "home", categoryId = 0}) => {
    const postsContainer = useRef();

    const [data, setData] = useState({
        posts: [],
        isLoading: true,
        countPosts: 0,
    });
    const [offset, setOffset] = useState(0);
    const [newVisit, setNewVisit] = useState(true);
    const [isError, setIsError] = useState(false);
    const [oldId, setOldId] = useState(categoryId);

    const THRESHOLD = 200; // ładuj kolejne przepisy, gdy użytkownik jest 200px powyżej końca

    const addOffset = () => setOffset(offset + POSTS_PER_PAGE);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (type !== "home") {
            setData({posts: [], isLoading: true, countPosts: 0});

            if (offset !== 0)
                // przy przejściu na inną kategorię, bo loadPosts i tak
                // zostanie wykonany w innym useEffect po wykryciu zmiany offset
                setOffset(0);
             else
                 // przy pierwszym wejściu na stronę
                loadPosts(0);
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
      if (data.posts.length === 0 && offset !== 0) return;

      if (!isError) {
            if (!data.isLoading && data.countPosts === data.posts.length) return;

            if (data.posts.length <= data.countPosts) {
                if (categoryId !== oldId) {
                    setOldId(categoryId);
                }

                if (type === "home") {
                    if (!sessionStorage.getItem(`${type}`)) loadPosts(offset);
                    else if (!newVisit) loadPosts(offset);
                } else {
                    loadPosts(offset);
                    setNewVisit(false);
                }
            }

            if (sessionStorage.getItem(`${type}`) && newVisit) setNewVisit(false);
        }
    }, [offset]);

    const handleScroll = () => {
      if (postsContainer.current.getBoundingClientRect().bottom - THRESHOLD <= window.innerHeight) {
          // gdy użytkownik zescrollował do końca diva postsContainer
        addOffset();
      }
    };

    const loadPosts = async (offset) => {
        let ENDPOINT = `${API}posts?per_page=${POSTS_PER_PAGE}&offset=${offset}`;

        if (type === "category") ENDPOINT += `&categories=${categoryId}`;
        else if (type === "tag") ENDPOINT += `&tags=${categoryId}`;

        try {
            const response = await fetch(ENDPOINT);
            console.log("offset: " + offset, "new posts:", response);

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

    const handleCache = () => {
        type === "home" && sessionStorage.setItem(`${type}`, JSON.stringify(data));
    };

    return (
        <div className={className} ref={postsContainer}>
            {data.isLoading ? (
                <Preloader/>
            ) : data.posts.length === 0 ? (
                <p>Brak postów</p>
            ) : (
                data.posts.map((post, index) => {
                    return (
                        <LazyLoadComponent key={index}>
                            <PostPrev post={post} handleCache={handleCache}/>
                        </LazyLoadComponent>
                    );
                })
            )}
        </div>
    );
};

export default InfinitePosts;
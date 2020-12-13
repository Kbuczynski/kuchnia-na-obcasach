import React, { useEffect, useState } from "react";
import prettierTitle from "../../functions/prettierTitle";
import PostArrows from "./PostArrows";
import CommentsShow from "../Comments/CommentsShow";
import CommentsForm from "../Comments/CommentsForm";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import RandomPosts from "./RandomPosts";
import { generatePDF } from "../../functions/generatePDF";
import GoogleAd from "../GoogleAd";

const PostContent = ({ post }) => {
  const [isSend, setIsSend] = useState(false);
  const [isCommentError, setIsCommentError] = useState(false);
  const [articleImage, setArticleImage] = useState("");
  const [firstHalfArticle, setFirstHalfArticle] = useState("");
  const [secondHalfArticle, setSecondHalfArticle] = useState("");
  const shareUrl = window.location.href;

  const handleView = () => window.scrollTo(0, 0);

  useEffect(() => {
    const tags = post.content.rendered.match(/<.*>/g);
    const ulIndex = [];

    tags.filter(
      (item, index) => item.indexOf("<ul>") !== -1 && ulIndex.push(index)
    );

    setArticleImage(tags[0]);
    setFirstHalfArticle(
      [...tags.slice(1, ulIndex[ulIndex.length - 1] + 1)].join("")
    );
    setSecondHalfArticle(
      [...tags.slice(ulIndex[ulIndex.length - 1] + 1)].join("")
    );
  }, [post]);

  return (
    <main className="postContent">
      <article className="postContent__article">
        <h1 className="postContent__article__title">
          {prettierTitle(post.title.rendered)}
        </h1>

        <div
          className="postContent__article__content"
          dangerouslySetInnerHTML={{
            __html: articleImage,
          }}
        ></div>

        <GoogleAd
          slot={7929301226}
          className={`postContent__article__ad`}
          format={`auto`}
        />

        <div
          className="postContent__article__content"
          dangerouslySetInnerHTML={{
            __html: firstHalfArticle,
          }}
        ></div>

        <GoogleAd
          slot={1503493675}
          className={`postContent__article__ad`}
          format={`auto`}
        />

        <div
          className="postContent__article__content"
          dangerouslySetInnerHTML={{
            __html: secondHalfArticle,
          }}
        ></div>

        <GoogleAd
          slot={2208615385}
          className={`postContent__article__ad`}
          format={`autorelaxed`}
        />

        <button
          className="postContent__article__download"
          onClick={() =>
            generatePDF(
              `Kuchnia na obcasach - ${prettierTitle(post.title.rendered)}.pdf`,
              post
            )
          }
        >
          Pobierz przepis!
        </button>

        <div className="postContent__article__share">
          <p>Udostępnij na:</p>
          <FacebookShareButton url={shareUrl}>
            <i className="icon-facebook"></i>
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <i className="icon-twitter"></i>
          </TwitterShareButton>
          <EmailShareButton url={shareUrl}>
            <i className="icon-mail"></i>
          </EmailShareButton>
        </div>
      </article>
      <section className="postContent__another">
        <PostArrows postPrev={post.previous} postNext={post.next} />
      </section>
      <section className="postContent__more">
        <div className="postContent__more__title">
          <h2>Zobacz również</h2>
        </div>
        <div className="postContent__more__container" onClick={handleView}>
          <RandomPosts postId={post.id} />
        </div>
      </section>
      <section className="postContent__comments">
        <CommentsShow
          post={post}
          isSend={isSend}
          setIsSend={setIsSend}
          setIsCommentError={setIsCommentError}
        />
        <CommentsForm
          post={post}
          isSend={isSend}
          setIsSend={setIsSend}
          isCommentError={isCommentError}
          setIsCommentError={setIsCommentError}
        />
      </section>
    </main>
  );
};

export default PostContent;

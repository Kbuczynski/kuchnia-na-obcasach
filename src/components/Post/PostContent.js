import React, { useState } from "react";
import prettierTitle from "../../functions/prettierTitle";
import removeWPClass from "../../functions/removeWPClass";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PostPDF from "./PostPDF";
import PostArrows from "./PostArrows";
import CommentsShow from "../Comments/CommentsShow";
import CommentsForm from "../Comments/CommentsForm";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import RandomPosts from "./RandomPosts";

const PostContent = ({ post }) => {
  const [isSend, setIsSend] = useState(false);
  const [isCommentError, setIsCommentError] = useState(false);
  const shareUrl = window.location.href;

  const handleView = () => window.scrollTo(0,0);

  return (
    <main className="postContent">
      <article className="postContent__article">
        <h1 className="postContent__article__title">
          {prettierTitle(post.title.rendered)}
        </h1>
        <div
          className="postContent__article__content"
          dangerouslySetInnerHTML={{
            __html: removeWPClass(post.content.rendered),
          }}
        ></div>
        <PDFDownloadLink
          className="postContent__article__download"
          document={<PostPDF post={post} />}
          fileName={`Kuchnia na obcasach - ${prettierTitle(
            post.title.rendered
          )}.pdf`}
        >
          {({ loading, error }) =>
            loading
              ? "Przygotowywanie pliku PDF..."
              : error
              ? "Ups coś poszło nie tak"
              : "Pobierz przepis!"
          }
        </PDFDownloadLink>
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

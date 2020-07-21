import React, { useState, useEffect } from "react";
import { API } from "../../data";
import changeDateType from "../../functions/changeDateType";
import profilPicture from "../../assets/default_profil_picture.png";
import mainAvatar from "../../assets/avatar.jpg";

const CommentsShow = ({ post, isSend, setIsSend, setIsCommentError }) => {
  const [data, setData] = useState({ comments: [], isLoading: true });

  useEffect(() => {
    const loadComments = async () => {
        try {
          const response = await fetch(
            `${API}comments?post=${post.id}&order=asc`
          );
          if (!response.ok) return;
          setData({ comments: await response.json(), isLoading: false });
        } catch {
          return;
        }
      };

    loadComments();

    if (isSend) {
    loadComments();

    setTimeout(() => {
      setIsCommentError(false);
      setIsSend(false);
    }, 1000);
  }
  }, [post, isSend, setIsSend]);  

  return (
    <>
      <h3 className="postContent__comments__title">Komentarze</h3>
      <ul className="postContent__comments__container">
        {data.comments.length === 0 ? (
          <li className="postContent__comments__container__item">
            brak komentarzy
          </li>
        ) : (
          data.comments.map((comment) => {
            if (comment.parent !== 0) return null;

            const subComment = data.comments.filter(
              ({ parent }) => parent === comment.id
            );

            return (
              <li
                key={comment.id}
                className="postContent__comments__container__item"
              >
                <div className="postContent__comments__container__item__box">
                  <div>
                    <img src={profilPicture} alt="Zdjęcie profilowe" />
                    {comment.author_name}&nbsp;
                    <span>|&nbsp;{changeDateType(comment.date)}</span>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: comment.content.rendered,
                    }}
                  ></p>
                </div>

                {subComment.length > 0 && (
                  <div className="postContent__comments__container__item__box">
                    <div>
                      <img src={mainAvatar} alt="Zdjęcie profilowe" />
                      Kuchnia&nbsp;na&nbsp;obcasach&nbsp;
                      <span>|&nbsp;{changeDateType(subComment[0].date)}</span>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: subComment[0].content.rendered,
                      }}
                    ></p>
                  </div>
                )}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default CommentsShow;

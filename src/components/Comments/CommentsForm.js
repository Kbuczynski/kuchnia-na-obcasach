import React from "react";
import { API } from "../../data";

const CommentsForm = ({
  post,
  isSend,
  setIsSend,
  isCommentError,
  setIsCommentError,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSend(false);

    const [postId, name, email, comment] = e.target.elements;

    const data = JSON.stringify({
      post: postId.value,
      author_name: name.value,
      author_email: email.value,
      content: comment.value,
    });

    fetch(`${API}comments`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok === true) {
          setIsCommentError(true);
          return;
        }

        return response.json();
      })
      .then((object) => {
        return;
      })
      .catch(() => setIsCommentError(true));

    e.target.reset();
    setIsSend(true);
  };

  return (
    <form className="postContent__comments__form" onSubmit={handleSubmit}>
      {isSend ? (
        isCommentError ? (
          <p>Ups.. coś poszło nie tak</p>
        ) : (
          <p>Twój komentarz został wysłany</p>
        )
      ) : null}
      <input type="hidden" id="postId" value={post.id} />
      <input
        type="text"
        required
        placeholder="*Podaj imię:"
        id="name"
        maxLength={18}
      />
      <input type="email" required placeholder="*Podaj e-mail:" id="email" />
      <textarea required id="comment" placeholder="*Wpisz wiadomość:" />
      <button type="submit">Dodaj komentarz</button>
    </form>
  );
};

export default CommentsForm;

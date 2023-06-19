import React, { useState } from "react";

import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../../Help/Error";
import { COMMENT_POST } from "../../../util/api";

import "./styles.css";

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    setComment("");
    if (response.ok) setComments((comments) => [...comments, json]);
  }

  return (
    <form className="formComment" onSubmit={handleSubmit}>
      <textarea
        className="textarea"
        name="comment"
        id="comment"
        placeholder="Comentar..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="formCommentButton">
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;

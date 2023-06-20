import React from "react";

import { PHOTO_DELETE } from "../../../util/api";
import useFetch from "../../../Hooks/useFetch";

import "./styles.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza de deseja deletar?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <div>
      {loading ? (
        <button disabled className="delete">
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className="delete">
          Deletar
        </button>
      )}
    </div>
  );
};

export default PhotoDelete;

import { useContext } from "react";
import { Link } from "react-router-dom";

import PhotoComments from "../PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../../Help/Imager";

import "./styles.css";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`photoContent ${single ? "single" : ""}`}>
      <div className="imgContent">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="authorContents">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className="visualizacoesContent">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} ano(s)</li>
          </ul>
        </div>
      </div>
      {!single && (
        <PhotoComments single={single} id={photo.id} comments={comments} />
      )}
    </div>
  );
};

export default PhotoContent;

import { Link } from "react-router-dom";

import PhotoComments from "../PhotoComments";

import "./styles.css";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className="photoContent">
      <div className="imgContent">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="authorContents">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;

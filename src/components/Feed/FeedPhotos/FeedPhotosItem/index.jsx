import Image from "../../../../Help/Imager";

import "./styles.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className="photo" onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className="visualizacao">{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

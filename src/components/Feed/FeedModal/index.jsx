import { useEffect } from "react";

import useFetch from "../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../util/api";
import Error from "../../../Help/Error";
import Loading from "../../../Help/Loading";
import PhotoContent from "../../PhotoContent";

import "./styles.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className="modal" onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;

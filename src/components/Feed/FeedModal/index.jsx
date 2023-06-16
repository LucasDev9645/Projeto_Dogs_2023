import { useEffect } from "react";

import useFetch from "../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../util/api";
import Error from "../../../Help/Error";
import Loading from "../../../Help/Loading";
import PhotoContent from "../../PhotoContent";

import "./styles.css";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className="modal">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;

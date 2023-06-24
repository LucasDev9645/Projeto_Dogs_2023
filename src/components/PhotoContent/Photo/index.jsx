import { useEffect } from "react";
import { useParams } from "react-router-dom";

import PhotoContent from "../../PhotoContent";
import useFetch from "../../../Hooks/useFetch";
import { PHOTO_GET_ID } from "../../../util/api";
import Error from "../../../Help/Error";
import Loading from "../../../Help/Loading";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET_ID(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;

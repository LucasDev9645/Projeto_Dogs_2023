import { useEffect } from "react";

import UserStatsGraphs from "../UserStatsGraphs";
import Head from "../../../Help/Head";
import useFetch from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../util/api";
import Loading from "../../../Help/Loading";
import Error from "../../../Help/Error";

import "./styles.css";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;

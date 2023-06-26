import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Head from "../../Help/Head";
import UserHeader from "./UserHeader";
import Feed from "../Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";
import { UserContext } from "../../UserContext";

import "./styles.css";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;

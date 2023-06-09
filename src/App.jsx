import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserStorage } from "./UserContext";

import Header from "./components/Header";
import Login from "./components/Login";
import Home from "../src/components/Home";
import Footer from "./components/Footer";

import "./styles/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;

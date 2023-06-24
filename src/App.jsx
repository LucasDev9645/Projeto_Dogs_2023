import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserStorage } from "./UserContext";
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import Home from "../src/components/Home";
import Photo from "./components/PhotoContent/Photo";
import Footer from "./components/Footer";
import ProtectedRouter from "./Help/ProtectedRouter";

import "./styles/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRouter>
                <User />
              </ProtectedRouter>
            }
          />
          <Route path="foto/:id" element={<Photo />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;

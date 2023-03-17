import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import NavBar from "../NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage path="/" />
      )}
    </div>
  );
}

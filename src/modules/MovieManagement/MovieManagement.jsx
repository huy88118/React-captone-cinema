
import React from "react";
import { useNavigate } from "react-router-dom";
import MovieList from './MovieList/MovieList'
import { Button } from "antd";


function MovieManagement() {
  const navigate = useNavigate();
  return (
    <div>

      <h1>Quản lí phim</h1>
      <Button onClick={() => navigate("/admin/movies/addfilm")} type="primary" to={"/"}
      >
        Thêm phim
      </Button>
     
      <MovieList />

    </div>
  )
}

export default MovieManagement
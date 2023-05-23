
import React, { useState, useEffect } from "react";
import { apiGetMovies } from "../../../apis/movieAPI.js";
import { DeleteOutlined, EditOutlined,CalendarOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";



function MovieList() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return ( 
 
      <table className="table">
        <thead>
          <tr>
            <th>Mã phim</th>
            <th>Hình ảnh</th>
            <th>Tên phim</th>
            <th>Mô tả</th>
            <th>Hành động</th>
           
          </tr>
        </thead>
      {movies.map((item) => {
        return (
          <tr key={item.maPhim}>
             <td>{item.maPhim}</td>
                <td><img style={{width:'70px', height:'70px'}} src={item.hinhAnh} alt="" /></td>
                <td>{item.tenPhim}</td>
                <td>{item.moTa}</td>
               
                <td style={{fontSize:"20px"}}>

                  <NavLink key={1} to={`/admin/movies/editfilm/${item.maPhim}`}>
                  <EditOutlined className="text-warning" />
                  </NavLink>
                
             <NavLink >
             <DeleteOutlined className="text-danger" />
              </NavLink>

              <NavLink key={1}  to={`/admin/showtimes/${item.maPhim}`} >
             <CalendarOutlined className="text-success"/>
              </NavLink>
                </td>
              </tr>
        )
      })}
       </table>
  )}
    


  

    
  


export default MovieList

import React, { useState, useEffect } from "react";
import { apiGetMovies } from "../../../apis/movieAPI.js";
import { DeleteOutlined, EditOutlined,CalendarOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import axiosClient from "../../../apis/axiosClient.js";



function MovieList() {
 

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const data = await  apiGetMovies();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

 

  
  const deletePhim = async (maPhim) => {
    try {
      await axiosClient.delete("/QuanLyPhim/XoaPhim/", {params:{
        MaPhim:maPhim}
      });
       setMovies(movies.filter(phim => phim.maPhim !== maPhim));
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
      {movies.map((phim) => {
        return (
          <tr key={phim.maPhim}>
             <td>{phim.maPhim}</td>
                <td><img style={{width:'70px', height:'70px'}} src={phim.hinhAnh} alt="" /></td>
                <td>{phim.tenPhim}</td>
                <td>{phim.moTa}</td>
               
                <td style={{fontSize:"20px"}}>

                  <NavLink key={1} to={`/admin/movies/editfilm/${phim.maPhim}`}>
                  <EditOutlined className="text-warning" />
                  </NavLink>
                
             <NavLink >
             <DeleteOutlined  onClick={() => deletePhim(phim.maPhim) }  className="text-danger" />
              </NavLink>

              <NavLink key={1}  to={`/admin/showtimes/${phim.maPhim}`} >
             <CalendarOutlined className="text-success"/>
              </NavLink>
                </td>
              </tr>
        )
      })}
       </table>
  )}
    


  

    
  


export default MovieList
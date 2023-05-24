
import React, { useState, useEffect } from "react";
import { apiGetUsers } from "../../../apis/userAPI.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import axiosClient from "../../../apis/axiosClient.js";


function UserList() {
  const [users, setUsers] = useState([]);
 
  const getUsers = async () => {
    try {
      const data = await apiGetUsers();
      setUsers(data.content);
    } catch (error) {
      console.log(error);
    }
  };
 
  

  const deleteUser = async (taiKhoan) => {
    try {
      await axiosClient.delete("/QuanLyNguoiDung/XoaNguoiDung/", {params:{
        TaiKhoan:taiKhoan}
      });


      // setUsers(users.filter(user => user.taiKhoan !== taiKhoan));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  


  // const deleteUser = (taiKhoan) => {
  //   setUsers(users.filter(user => user.taiKhoan !== taiKhoan))
  // }
  return (
    <div>
  
      <table className="table">
        <thead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Mã loại người dùng</th>
            <th></th>

          </tr>
        </thead>
        {users.map((user) => {
          return (
            <tr key={user.taiKhoan}>
              <td>{user.taiKhoan}</td>
              <td>{user.hoTen}</td>
              <td>{user.email}</td>
              <td>{user.soDT}</td>
              <td>{user.maLoaiNguoiDung}</td>
              <td style={{fontSize:"20px"}} >
                
                <NavLink key={1}  to={`/admin/users/${user.taiKhoan}`}
                  > 
                  <EditOutlined  className="text-warning" />
                  </NavLink>
                <NavLink  onClick={() => deleteUser(user.taiKhoan)} 
               
                 >
                  <DeleteOutlined className="text-danger" />
                  
                </NavLink>
              </td>
            </tr>
          )
        })}
      </table>
     
    </div>
  )
}

export default UserList
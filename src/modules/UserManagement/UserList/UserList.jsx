
import React, { useState, useEffect } from "react";
import { apiGetUsers } from "../../../apis/userAPI.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";



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
 

  useEffect(() => {
    getUsers();
  }, []);

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
        {users.map((item) => {
          return (
            <tr key={item.taiKhoan}>
              <td>{item.taiKhoan}</td>
              <td>{item.hoTen}</td>
              <td>{item.email}</td>
              <td>{item.soDT}</td>
              <td>{item.maLoaiNguoiDung}</td>
              <td>
                <button
                  type="button" className="btn "> 
                  <EditOutlined className="text-warning" />
                  </button>
                <button className="btn ">
                  <DeleteOutlined className="text-danger" />
                </button>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default UserList
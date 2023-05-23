import React from 'react'
import { useForm } from 'react-hook-form';
import { apiAddUser } from '../../../apis/userAPI';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function UserForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: ""

    },
  });

  const onSubmit = async (values) => {

    const payload = { values };

    console.log(payload);

    try {
      await apiAddUser(payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (

<>
      <Button type="primary" onClick={showModal}>
        Thêm người dùng
      </Button>
      <Modal title="Add new User" open={isModalOpen} onOk={handleSubmit(onSubmit)} onCancel={handleCancel}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Tài khoản" {...register("taiKhoan")} />
        </div>
        <div>
          <input placeholder="Mật khẩu" {...register("matKhau")} />
        </div>
        <div>
          <input placeholder="Email" {...register("email")} />
        </div>
        
        <div>
          <input placeholder="Số điện thoại" {...register("soDT")} />
        </div>
        <div>
          <input placeholder="Mã nhóm" {...register("maNhom")} />
        </div>
        <div>
          <input placeholder="Mã loại người dùng" {...register("maLoaiNguoiDung")} />
        </div>
        {/* <select {...register("maLoaiNguoiDung")}>
        
          <option value="KhachHang">KhachHang</option>
          <option value="QuanTri">QuanTri</option>

        </select> */}
        <div>
          <input placeholder="Họ tên" {...register("hoTen")} />
        </div>
      
      

        {/* <button className='btn btn-success'>Thêm người dùng</button> */}
      </form>
      </Modal>
    </>

    
  )
}

export default UserForm
 

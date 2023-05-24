import React from 'react'
import { useForm } from 'react-hook-form';
import { apiAddUser } from '../../../apis/userAPI';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import swal from "sweetalert";

function UserForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",  
      maLoaiNguoiDung: "",
      hoTen: "",

    }
  });

  const onSubmit = async (values) => {

    const payload = { ...values , maNhom:"GP14" };

    console.log(payload);

    try {
      await apiAddUser(payload);
      swal("Thêm user thành công", "", "success");
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
        
      <select  {...register("maLoaiNguoiDung")}>
   <option value="">Chọn loại người dùng</option>
       <option value="KhachHang">KhachHang</option>
       <option value="QuanTri">QuanTri</option>

     </select>
      </div>
        <div>
          <input placeholder="Họ tên" {...register("hoTen")} />
        </div>
    
      </form>
      </Modal>
    </>

    
  )
}

export default UserForm
 

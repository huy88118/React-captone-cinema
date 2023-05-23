// import React, { useEffect, useState } from 'react'
import {  Button, Form } from 'antd';
import { Cascader } from 'antd';
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import dayjs from 'dayjs';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
// import axiosClient from '../../apis/axiosClient';
function ShowtimesManagement() {

//   const [state,setState] = useState({
//     heThongRapChieu:[],
//     cumRapChieu:[],
 
//   });
//   console.log(state.heThongRapChieu);
//   useEffect( async () => {
//     try {
// let result = await axiosClient.apiGetThongTinHeThongRap();
//    setState({
//     ...state,
//     heThongRapChieu:result.data.content
//    })
//     }catch(error){

//     }
//   },[])

const handleChangeHeThongRap = (values) => {

};

// const onOk = (values) => {

// };

// const onChangeDate = (values) => {

// }
const onChangeInputNumber = (values)=> {

}
  return (
    <div className='container'>
 
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <h3 className=''>Tạo lịch chiếu</h3>
        <Form.Item label="Hệ thống rạp">
          <Cascader options={[{label:"AAA", value:"AAA"},{label:"BBB",value:"BBB"}]} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
        
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Cascader options={[{label:"AAA", value:"AAA"},{label:"BBB",value:"BBB"}]} onChange={handleChangeHeThongRap} placeholder="Chọn cụm rạp" />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
        <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        </Form.Item>
        <Form.Item label="Giá vé">
        <InputNumber min={75000} max={150000}  onChange={onChangeInputNumber} />
        </Form.Item>
       <Form.Item label="Chức năng">
       <Button>Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </div>

  )
}

export default ShowtimesManagement
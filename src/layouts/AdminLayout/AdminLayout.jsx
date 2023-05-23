import { UserOutlined, CameraOutlined, FileAddOutlined, EditOutlined, FieldTimeOutlined, } from '@ant-design/icons';
import { Avatar, Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from "../../slices/userSlice";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function AdminLayout() {

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signout());
    localStorage.removeItem("user");
  };

  const handleSignin = () => {
    //chuyển sang trang /signin
    navigate("/signin");
  };

  // const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='d-flex'>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <h3 className='text-white'>Cyber Film</h3>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="1" icon={<UserOutlined />}  >
              <NavLink to="/admin/users" >User</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileAddOutlined />} title="Movies">

              <Menu.Item key="2" icon={<CameraOutlined />}  >
                <NavLink to="/admin/movies">ListFilm</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<FileAddOutlined />}  >
                <NavLink to="/admin/movies/addfilm">Add Film</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<EditOutlined />}  >
                <NavLink to="/admin/movies/editfilm/:id">Edit Film</NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<FieldTimeOutlined />}  >
              <NavLink to="/admin/showtimes/id">ShowTimes</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='d-flex justify-content-end ' style={{ backgroundColor: 'white' }}>
            <div className='' >
              {user ? (
                <>
                  <Avatar style={{ width: "45px", height: "45px" }}> <p style={{ fontSize: "60px", color: "black" }}>{user.hoTen}</p></Avatar>
                  <button className='btn btn-danger' onClick={handleLogout}>Đăng xuất</button>
                </>
              ) : (
                <button onClick={handleSignin}>Đăng Nhập </button>
              )}
              <button onClick={() => {
                navigate("/")
              }} className='btn btn-primary'>Home</button>
            </div>

          </Header>
          <div className='text-center'>
          <h1 >Trang Quản Trị</h1>
          </div>

          <Content>

            <div className='ms-5'>
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>



    </div>
  )
}

export default AdminLayout
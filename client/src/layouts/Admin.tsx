import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "antd/dist/reset.css";
import Sider from "antd/es/layout/Sider";
import { UserOutlined, HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} style={{ background: "#001529" }}>
        <div
          style={{
            height: "64px",
            color: "white",
            textAlign: "center",
            lineHeight: "64px",
            fontSize: "18px",
          }}
        >
          Admin Panel
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/admin/products" icon={<ShopOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="/admin/products/add" icon={<ShopOutlined />}>
            <Link to="/admin/products/add">Product Add</Link>
          </Menu.Item>
          <Menu.Item key="/admin/users" icon={<UserOutlined />}>
            Users
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            fontSize: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          Admin Dashboard
        </Header>
        <Content
          style={{
            margin: "20px",
            padding: "20px",
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;

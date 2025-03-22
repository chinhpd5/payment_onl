import { Layout, Menu, MenuProps } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "antd/dist/reset.css";
import Sider from 'antd/es/layout/Sider';
import {AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons'


const headerStyle: React.CSSProperties = {
  padding:0
  // textAlign: 'center',
  // color: '#fff',
  // height: 64,
  // paddingInline: 48,
  // lineHeight: '64px',
  // backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  // textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: '',
};

const siderStyle: React.CSSProperties = {
  // textAlign: 'center',
  // lineHeight: '120px',
  // color: '#fff',
  backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  padding: 0
  // borderRadius: 8,
  // overflow: 'hidden',
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link to="/">Trang chủ</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/about">About</Link>,
    key: 'about',
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/checkout">Checkout</Link>,
    key: 'checkout',
    icon: <AppstoreOutlined />,
  },
];

function Client() {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
     <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Header>
      
      <Layout>
        <Sider width="10%" style={siderStyle}></Sider>
        <Content style={contentStyle}>
          <Outlet/>
        </Content>
        <Sider width="10%" style={siderStyle}></Sider>
      </Layout>

      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    </div>
  )
}

export default Client
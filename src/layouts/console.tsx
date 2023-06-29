import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Layout, Header, Content, Sider, Menu, Footer } from '../components';
import './console.css';


export default function MainLayout() {
  const [siderItems, setSiderItems] = useState([]);

  const menus = [
    {
      key: '/console',
      label: '首页',
      path: '/console',
    },
    {
      key: '/console/components',
      label: '组件',
      siders: [
        {
          key: '/console/components/layout',
          label: 'Layout',
          path: '/console/components/layout',
        },
        {
          key: '/console/components/menu',
          label: 'Menu',
          path: '/console/components/menu',
        },
      ],
    },
    {
      key: '/console/guide',
      label: '指南',
      siders: [
        {
          key: '/console/guide/base',
          label: '基础',
          path: '/console/guide/base',
        },
        {
          key: '/console/guide/pro',
          label: '进阶',
          path: '/console/guide/pro',
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (item: any) => {
    setSiderItems(item.siders);
    let path = '';
    if (item.siders && item.siders.length > 0) {
      path = item.siders[0].path;
    } else if (item.path) {
      path = item.path;
    }
    navigate(path);
  };

  const handleSiderClick = (item: any) => {
    navigate(item.path);
  };

  return (
    <>
      <Layout className="console">
        <Header className="head-menu" height="64px">
          <div className="logo">Wee-Components</div>
          <Menu items={menus} onClick={handleMenuClick} />
        </Header>
        <Layout style={{ height: 'calc(100% - 64px)' }}>
          {
            siderItems?.length ?
            <Sider className="sidebar">
              <Menu items={siderItems} onClick={handleSiderClick} mode="vertical" />
            </Sider> : <></>
          }
          <Layout style={{ overflow: 'scroll' }}>
            <Content className="main-content">
              <Outlet />
            </Content>
            <Footer className="main-footer">
              <div>powered by weedust</div>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

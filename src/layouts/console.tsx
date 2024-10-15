import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ve } from '../components';
import './console.css';

const { Layout, Header, Content, Sidebar, Menu, Footer } = ve;

const menus = [
  {
    key: '/console',
    label: '首页',
    path: '/console',
  },
  {
    key: '/console/components',
    label: '组件',
    sidebarList: [
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
    sidebarList: [
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



export default function MainLayout() {
  const [sidebarList, setSidebarList] = useState([] as { key: string, label: string, path: string}[]);
  const [activeKey, setActiveKey] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const { pathname } = location;
    menus.forEach((item) => {
      const { sidebarList } = item;
      if (sidebarList && sidebarList.length > 0) {
        let inSidebar = false;
        for (let sidebar of sidebarList) {
          if (sidebar.path === pathname) {
            inSidebar = true;
            setActiveKey(sidebar.key);
            break;
          }
        }
        if (inSidebar) {
          setSidebarList(sidebarList);
        }
      }
    });
  };

  const handleMenuClick = (item: any) => {
    setSidebarList(item.sidebarList);
    let path = '';
    let activeKey = '';
    if (item.sidebarList && item.sidebarList.length > 0) {
      path = item.sidebarList[0].path;
      activeKey = item.sidebarList[0].key;
    } else if (item.path) {
      path = item.path;
      activeKey = item.key;
    }
    setActiveKey(activeKey);
    navigate(path);
  };

  const handleSidebarClick = (item: any) => {
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
            sidebarList?.length ?
            <Sidebar className="sidebar">
              <Menu
                mode="vertical"
                items={sidebarList}
                defaultActiveKey={activeKey}
                onClick={handleSidebarClick}
              />
            </Sidebar> : <></>
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

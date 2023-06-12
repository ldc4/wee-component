import React from 'react';
import { Outlet } from 'react-router-dom';
import './console.css';

export default function MainLayout() {
  return (
    <>
      <div className="console">
        <div className="top-menu"> </div>
        <div className="body">
          <div className="sidebar"> </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

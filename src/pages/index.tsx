import React from 'react';
import { useEffect } from 'react';

import './index.css';

function init() {
  console.log('init');
}


export default function App() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="app" id="app">
      
    </div>
  )
}
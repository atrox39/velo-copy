import React from 'react';
import Titlebar from './components/titlebar';
import Menu from './components/menu';
import Body from './components/body';

export default function App() {
  return (
    <div id="dashboard-container">
      <Titlebar />
      <div className="container">
        <Menu />
        <Body />
      </div>
    </div>
  );
}

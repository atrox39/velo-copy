import React from 'react';
import './titlebar.css';
import icon from '../assets/images/icon.png';
import { usePageStore } from '../store/page.store';

export default function Titlebar() {
  const page = usePageStore((state) => state.page);

  const minimise = () => {
    window.runtime.WindowMinimise();
  };

  const maximise = () => {
    window.runtime.WindowToggleMaximise();
  };

  const quit = () => {
    window.runtime.Quit();
  };

  return (
    <header className="header" onDoubleClick={maximise}>
      <div className="header-left">
        <div className="header-left-content">
          <img src={icon} id="icon" />
          <span id="title-label">Velo</span>
        </div>
        <svg xmlns="http://www.w3.org/http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="menu">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="header-center">
        <span className="header-center-label">{page}</span>
        <div className="header-center-input">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="search-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-buttons">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="help">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="bell">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        <img id="avatar" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="avatar profile" />
        <span onClick={minimise}><i className="minimize"></i></span>
        <span onClick={maximise}><i className="maximize"></i></span>
        <span onClick={quit}><i className="quit"></i></span>
      </div>
    </header>
  );
}

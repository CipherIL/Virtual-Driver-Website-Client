import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import './pageLayout.styles.scss';

const PageLayout: React.FC = () => {
  return (
    <>
      <header><Navbar/></header>
      <main className='main-content'>
        <Outlet/>
      </main>
    </>
  )
}

export default PageLayout;
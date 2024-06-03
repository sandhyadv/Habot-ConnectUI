
import React from 'react';
import { useMediaQuery } from '@mui/material';
import SidebarHamburger from './SidebarHamburger';
import Navbar from './Navbar';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? <SidebarHamburger /> : <Navbar />}
    </>
  );
};

export default Header;

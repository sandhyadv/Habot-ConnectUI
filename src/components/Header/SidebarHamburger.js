import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import habotLogo from "../../assets/habot-logo.svg";
import downArrow from "../../assets/downArrow.svg"

const SidebarHamburger = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <>
      <div className="px-5 flex mt-[-30px]">
        <IconButton
          className="rounded-md border-2 border-[#00732F] px-2 py-2"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={habotLogo}
          alt="Habot Logo"
          className="h-[160px] w-[130px]"
        />
      </div>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="px-5 py-3 flex justify-between items-center">
            <h1>Menu</h1>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            <ListItem>
              <ListItemText primary="Find Suppliers" />
            </ListItem>
            <ListItem >
              <div className="flex items-center gap-1.5">
                <ListItemText primary="Find Service Tags" />
                <img src={downArrow} alt="Down Arrow" className="h-3 w-3 cursor-pointer" />
              </div>
            </ListItem>
            <ListItem >
              <ListItemText primary="Login / Sign Up" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SidebarHamburger;

import React from "react";
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
// import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";
import monogram from "../../static/msm-white.png";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = (event: React.MouseEvent<HTMLElement>) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Header">
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <div className="NameMonogram">
            <img src={monogram} alt="monogram" width="32" height="32" />
          </div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">About me</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact">Contact Me</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/news">News</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

import React from 'react';
import './Header.css';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="Header">
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" >
						Menu
          			</Typography>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>My Profile</MenuItem>
						<MenuItem onClick={handleClose}>Contact Me</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
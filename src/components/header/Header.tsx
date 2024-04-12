import React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import name_typography from '../../static/name_typography.png';

function Header() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(null);
	};

	return (
		<div className="Header">
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
						<MenuIcon />
					</IconButton>
					<div className='NameTypography'>
						<img src={name_typography} alt='typography' width='64' height='64' />
					</div>
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
						<MenuItem onClick={handleClose} >
							<Link to="/">About me</Link>
						</MenuItem>
						<MenuItem onClick={handleClose} >
							<Link to="/contact">Contact Me</Link>
						</MenuItem>
						<MenuItem onClick={handleClose} >
							<Link to="/news">News</Link>
						</MenuItem>
						<MenuItem onClick={handleClose} >
							<Link to="/blog">Blog</Link>
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;

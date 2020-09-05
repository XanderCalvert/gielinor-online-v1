import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<Link to="/">
				<img
					className="header__icon"
					src="..\airbnblogo.png"
					alt="airbnb-logo"
				></img>
			</Link>
		</div>
	);
}

export default Navbar;

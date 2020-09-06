import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="header">
			<Link className="header__link" to="/">
				<p className="header__text">Home</p>
			</Link>
			<Link className="header__link" to="/skill-calculators">
				<p className="header__text">Skill Calculators</p>
			</Link>
			<Link className="header__link" to="/upcoming-fetures">
				<p className="header__text">Upcoming Fetures</p>
			</Link>
			<Link className="header__link" to="/about">
				<p className="header__text">About</p>
			</Link>
		</div>
	);
}

export default Navbar;

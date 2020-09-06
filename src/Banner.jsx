import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
	return (
		<div className="banner">
			<Link to="/">
				<img src="..\osrslogo.png" alt="osrs-logo" className="banner__img" />
			</Link>
		</div>
	);
}

export default Banner;

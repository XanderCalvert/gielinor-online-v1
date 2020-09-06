import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div>
			{" "}
			<div className="footer">
				<p>
					© {new Date().getFullYear()} Matt Calvert, Inc. All rights reserved
				</p>
				<p>Runescape is property of Jagex</p>
			</div>
		</div>
	);
}

export default Footer;

import React from "react";
import "./SkillSelect.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SkillSelect() {
	return (
		<div className="skillselect">
			<div className="skillselect__f2p">
				<h2>Free-to-play skills</h2>
			</div>
			<div className="skillselect__f2p">
				<Link className="skillselect__link" to="/skill-calculators/attack">
					<span>Attack</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/strength">
					<span>Strength</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/defence">
					<span>Defence</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/ranged">
					<span>Ranged</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/prayer">
					<span>Prayer</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/magic">
					<span>Magic</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/runecraft">
					<span>Runecraft</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/hitpoints">
					<span>Hitpoints</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/crafting">
					<span>Crafting</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/mining">
					<span>Mining</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/smithing">
					<span>Smithing</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/fishing">
					<span>Fishing</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/cooking">
					<span>Cooking</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/firemaking">
					<span>Firemaking</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/woodcutting">
					<span>Woodcutting</span>
				</Link>
			</div>
			<div className="skillselect__p2p">
				<h2>Pay-to-play skills</h2>
				<Link className="skillselect__link" to="/skill-calculators/agility">
					<span>Agility</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/herblore">
					<span>Herblore</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/thieving">
					<span>Thieving</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/fletching">
					<span>Fletching</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/slayer">
					<span>Slayer</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/farming">
					<span>Farming</span>
				</Link>
				<Link
					className="skillselect__link"
					to="/skill-calculators/construction"
				>
					<span>Construction</span>
				</Link>
				<Link className="skillselect__link" to="/skill-calculators/hunter">
					<span>Hunter</span>
				</Link>
			</div>
		</div>
	);
}

export default SkillSelect;

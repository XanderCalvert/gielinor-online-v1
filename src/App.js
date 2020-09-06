import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Home from "./Home";
import About from "./About";
import Banner from "./Banner";
import SkillCalc from "./SkillCalc";
import SkillSelect from "./SkillSelect";
import Upcoming from "./Upcoming";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				{/* Navbar */}
				<Header />
				{/* Calculator roots */}
				<Switch>
					<Route path="/skill-calculators">
						{/* Skill Selector */}
						<SkillSelect />
						{/* Skill Calculator */}
						<SkillCalc />
					</Route>
					{/* Upcoming Fetures Route */}
					<Route path="/upcoming-fetures">
						{/* Home Page */}
						<Upcoming />
					</Route>
					{/* About Route */}
					<Route path="/about">
						{/* Home Page */}
						<About />
					</Route>
					{/* Home Route */}
					<Route path="/">
						{/* Banner */}
						<Banner />
						{/* Skill Selector */}
						<SkillSelect />
						{/* Home Page */}
						<Home />
					</Route>
				</Switch>
				{/* Footer */}
				<Footer />
			</Router>
		</div>
	);
}

export default App;

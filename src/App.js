import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Banner from "./Banner";
import SkillCalc from "./SkillCalc";
import SkillSelect from "./SkillSelect";
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
				</Switch>
				{/* About Route */}
				<Switch>
					<Route path="/about">
						{/* Banner */}
						<Banner />
						{/* Home Page */}
						<About />
					</Route>
				</Switch>
				{/* Home Route */}
				<Switch>
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

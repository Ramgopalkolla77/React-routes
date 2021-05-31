import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";


export default function Header() {
	return (
		<nav className="navbar bg-light justify-content-center">
			<li className="nav-link">
				<a href="/" className="nav-link">
					Refresh
				</a>
			</li>
			<li className="nav-link">
				<NavLink to="/menu" className="nav-link" activeClassName="btn btn-primary">
					Sidebar
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/dashboard" className="nav-link" activeClassName="btn btn-primary">
					Dashboard
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/projects" className="nav-link" activeClassName="btn btn-primary">
					Our Projects
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/topics" className="nav-link" activeClassName="btn btn-primary">
					My Topics
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/about" className="nav-link" activeClassName="btn btn-primary">
					About
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/about-lazy-load" className="nav-link" activeClassName="btn btn-primary">
					Lazy Loading
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/contact" className="nav-link" activeClassName="btn btn-primary">
					Contact 
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/login" className="nav-link" activeClassName="btn btn-primary">
					Login
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink
					to="/logout"
					onClick={() => localStorage.clear()}
					className="nav-link"
					activeClassName="btn btn-primary">
					Logout
				</NavLink>
			</li>
		</nav>
	);
}

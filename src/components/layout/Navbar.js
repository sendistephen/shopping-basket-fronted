import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav class="center">
			<div class="container">
				<div class="nav-content-wrapper">
					<div class="nav-logo">
						<h3>Shopping Basket</h3>
					</div>
					<Link to="./login" class="btn btn-login">
						Sign in
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Baskets from "./components/baskets/Baskets";
import Basket from "./components/basket/basket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
	<Router>
		<Fragment>
			<Navbar />
			<Route exact path="/" component={Register} />
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/baskets" component={Baskets} />
				<Route exact path="/basket" component={Basket} />
			</Switch>
		</Fragment>
	</Router>
);

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Baskets = () => {
	return (
		<section id="baskets">
			<div className="basket__main-area">
				<div className="basket__side-nav">
					<div className="basket-link-wrapper">
						<i className="fa fa-home" aria-hidden="true"></i>
						<Link className="basket-link home active" href="./basket">
							Home
						</Link>
					</div>
					<div className="basket-link-wrapper">
						<i className="fa fa-shopping-basket" aria-hidden="true"></i>
						<Link className="basket-link" to="./baskets">
							All Baskets
						</Link>
						<span className="badge">10</span>
					</div>
					<div className="basket-link-wrapper">
						<i className="fa fa-th-list" aria-hidden="true"></i>
						<Link className="basket-link" to="!#">
							Completed
						</Link>
						<span className="badge">5</span>
					</div>
				</div>
				<div className="basket__content-area">
					<h2>My Baskets</h2>
					<div className="basket__category">
						<div>
							<input type="checkbox" name="" />
							<Link href="./baskets">Home Shopping</Link>
						</div>
						<div className="basket__icons">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className="basket__category">
						<div>
							<input type="checkbox" name="" />
							<Link href="!#">School Shopping</Link>
						</div>
						<div className="basket__icons">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className="basket__category">
						<div>
							<input type="checkbox" name="" />
							<Link href="#">Farm materials</Link>
						</div>
						<div className="basket__icons">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className="basket__category">
						<div>
							<input type="checkbox" name="" id="" />
							<Link href="#">Kitchen Materials</Link>
						</div>
						<div className="basket__icons">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className="basket__category">
						<div>
							<input type="checkbox" name="" id="" />
							<Link href="#">Visitation Day</Link>
						</div>
						<div className="basket__icons">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className="basket__category">
						<div>
							<input type="checkbox" name="" id="" />
							<Link href="#">Stephen's Birthday</Link>
						</div>
						<div className="basket__icons">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className="basket__form">
						<form>
							<input type="text" placeholder="Add basket" />
							<input type="submit" value="Create" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Baskets;

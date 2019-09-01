import React from "react";
import { Link } from "react-router-dom";

const Basket = () => {
	return (
		<section id="baskets">
			<div class="basket__main-area">
				<div class="basket__side-nav">
					<div class="basket-link-wrapper">
						<i class="fa fa-home" aria-hidden="true" />
						<Link class="basket-link home active" to="./baskets">
							Home
						</Link>
					</div>
					<div class="basket-link-wrapper">
						<i class="fa fa-shopping-basket" aria-hidden="true" />
						<Link class="basket-link" href="#">
							All Baskets
						</Link>
						<span class="badge">10</span>
					</div>
					<div class="basket-link-wrapper">
						<i class="fa fa-th-list" aria-hidden="true" />
						<Link class="basket-link" href="#">
							Completed
						</Link>
						<span class="badge">5</span>
					</div>
				</div>
				<div class="basket__item-content-area">
					<h2>Home Shopping</h2>
					<div class="basket__item">
						<div>
							<input type="checkbox" name="" />
							<Link to="#">Home Shopping</Link>
						</div>
						<div class="basket__item-icons">
							<i class="fa fa-pencil-square-o" aria-hidden="true" />
							<i class="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<div class="basket__item">
						<div>
							<input type="checkbox" name="" />
							<Link to="#">School Shopping</Link>
						</div>
						<div class="basket__item-icons">
							<i class="fa fa-pencil-square-o" aria-hidden="true" />
							<i class="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<div class="basket__item">
						<div>
							<input type="checkbox" name="" />
							<Link to="#">Farm materials</Link>
						</div>
						<div class="basket__item-icons">
							<i class="fa fa-pencil-square-o" aria-hidden="true" />
							<i class="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<div class="basket__item">
						<div>
							<input type="checkbox" name="" />
							<Link href="#">Kitchen Materials</Link>
						</div>
						<div class="basket__item-icons">
							<i class="fa fa-pencil-square-o" aria-hidden="true" />
							<i class="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<div class="basket__item">
						<div>
							<input type="checkbox" name="" />
							<Link to="#">Visitation Day</Link>
						</div>
						<div class="basket__item-icons">
							<i class="fa fa-pencil-square-o" aria-hidden="true" />
							<i class="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<div class="basket__item">
						<div>
							<input type="checkbox" name="" />
							<link to="#">Stephen's Birthday</link>
						</div>
						<div class="basket__item-icons">
							<i class="fa fa-pencil-square-o" aria-hidden="true" />
							<i class="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<div class="basket__form">
						<form>
							<input type="text" placeholder="Add Item" />
							<input type="submit" value="Create" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Basket;

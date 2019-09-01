import React from "react";

const Register = () => {
	return (
		<section class="main center">
			<div class="container">
				<div class="main-content-wrapper">
					<div class="main-content-holder">
						<h2>
							Shopping made <span>easy</span>
						</h2>
						<p>
							Manage your shopping with ease. Create, read, update and delete your shopping basket.
						</p>
					</div>
					<div class="card">
						<p>Don’t have an account? Register here to get started.</p>
						<form>
							<input class="form-control" type="text" placeholder="Name" />
							<input class="form-control" type="email" placeholder="Email" />
							<input class="form-control" type="password" placeholder="Password" />
							<input class="btn btn-register" type="submit" value="Register" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;

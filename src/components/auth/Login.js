import React from "react";

const Login = () => {
	return (
		<section class="main center">
			<div class="container">
				<div class="main-content-wrapper">
					<div class="main-content-holder">
						<h2>
							Shopping made <span>easy</span>
						</h2>
						<p>
							Manage your shopping with ease. Create, read, update <br /> and delete your shopping
							basket.
						</p>
					</div>
					<div class="card">
						<p>Have an account? Login here.</p>
						<form>
							<input class="form-control" type="email" placeholder="Email" />
							<input class="form-control" type="password" placeholder="Password" />
							<input class="btn btn-register" type="submit" value="Login" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, login } from "../../redux/actions";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastySuccess } from "../../consts/toasts";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { useNavigate } from "react-router-dom";
// import { handleNavigate } from "../../consts/helper";

function Login(props) {
	const dispatch = useDispatch();
	const deso = useSelector((state) => state.deso);
	const [publicKey, setPublic] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (deso.publicKey === "" || deso.publicKey === null) {
			dispatch(connect());
		}
	}, []);

	useEffect(() => {
		if (deso.publicKey) {
			setPublic(deso.publicKey);
			toastySuccess(
				"You already have an account " + "look at the footer for more details ",
			);
		}
	}, [deso.publicKey]);

	const handlePageChange = () => {
		navigate("/discover");
	};

	return (
		<div>
			<div id="heading-container">
				<p id="heading">
					Welcome to <span id="text">Artsy</span>
				</p>

				<div id="button-container">
					<button onClick={handlePageChange}
						// onClick={(e) => {
						// 	e.preventDefault();
						// 	dispatch(connect());
						// }}
						id="button">
						<p id="login-text">Login</p>
					</button>
					<button
						id="button"
						onClick={(e) => {
							e.preventDefault();
							dispatch(login());
						}}>
						<p id="login-text">Connect</p>
					</button>
				</div>
			</div>

			<iframe
				title="desoidentity"
				id="identity"
				frameBorder="0"
				src="https://identity.deso.org/embed?v=2"
				style={{
					height: "100vh",
					width: "100vw",
					display: "none",
					position: "fixed",
					zIndex: 1000,
					left: 0,
					top: 0,
				}}></iframe>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<footer id="footer">
				{" "}
				{publicKey && (
					<div>
						Hello, you are logged in. Click the Login button to continue!{" "}
						{/* <button onClick={handlePageChange}>click me</button> to procceed{" "} */}
						<div style={{ margin: "1px", padding: "1px" }}>
							This is your publicKey <span id="text">{publicKey} </span>
							<br></br>
							<p>If this is not your account click on Connect again!</p>
						</div>
					</div>
				)}
			</footer>
		</div>
	);
}

export default Login;

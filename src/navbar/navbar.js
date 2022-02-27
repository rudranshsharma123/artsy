import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar({ isHome }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const deso = useSelector((state) => state.deso);
	console.log(deso);
	useEffect(() => {
		if (deso.publicKey === "" || deso.publicKey === null) {
			dispatch(connect());
		}
	}, []);
	const handlePageChange = () => {
		if (isHome) {
			navigate("/");
			return;
		}
		navigate("/user");
	};

	return (
		<nav id="nav">
			<div id="nav-links">AppName</div>
			<div id="nav-links-deso">{deso.publicKey}</div>
			<button id="buttons" onClick={handlePageChange}>
				{isHome ? "Home" : "Profile"}
			</button>
		</nav>
	);
}

export default Navbar;

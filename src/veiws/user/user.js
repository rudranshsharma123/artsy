import React from "react";
import { connect } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function User(props) {
	const dispatch = useDispatch();
	const deso = useSelector((state) => state.deso);
	console.log(deso);
	useEffect(() => {
		if (deso.publicKey === "" || deso.publicKey === null) {
			dispatch(connect());
		}
	}, []);
	return <div>this is user</div>;
}

export default User;

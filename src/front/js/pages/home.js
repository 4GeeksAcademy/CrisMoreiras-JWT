import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="text-center mt-5">
			<br/>
			<h1>THIS IS THE BEST HOME OF THE BEST WEB IN THE WORLD!!</h1>
			<br/>

			<Link to="/signup">
				<button className="btn btn-primary m-5">Signup</button>
			</Link>

			<Link to="/login">
				<button className="btn btn-success m-5">Login</button>
			</Link>
			
		</div>
		</>
	);
};

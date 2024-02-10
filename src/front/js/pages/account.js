import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";


export const Account = () => {
	const { store, actions } = useContext(Context);

	function handlelogout(){
		actions.logout()
		Navigate('/')
	}

	return (
		<>
		<div className="text-center mt-5">
			
            <h1>HELLO</h1>
			<br/>
			<h2>WELCOME TO YOUR PRIVATE ACCOUNT!!</h2>
			<br/>

			<Link to="/">
				{store.auth === true ? 
				<button className="btn btn-danger m-5" onClick={()=>handlelogout()}>Logout</button> : null}
			</Link>
			
		</div>
		</>
	);
};

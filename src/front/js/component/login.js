import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);

    function sendData(e){
        e.preventDefault();
        actions.login(email, password);
        console.log('Logueado');
    }

	return (
        <>
		<div className="container text-center">
            {store.auth === true ? <Navigate to="/Account" /> :
            <form onSubmit={sendData}>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input
                        onChange={(e)=>setEmail(e.target.value)} 
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-10">
                        <input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                       />
                    </div>
                </div>
                <button type="submit" className="btn btn-success" >Login</button>
            </form>
            }
            <br/>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
        </>
	);
};

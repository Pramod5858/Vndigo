import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`email:${email}, password: ${password}`);
        await axios.post("http://localhost:5500/login", {
        email, password
        }, {
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(
            response=>{
                console.log(response);
                if(response.data.role==="admin"){
                    alert("You are ate dashboard")
                    navigate("/adminlogin")
                }else{
                    alert("You are ate Home");
                    navigate("/")
                }
            }
        )
            .catch(error => {
                console.log(error);
                alert("No email found, you need to first signup then do login")
            })
    }

    return (
        <div className="container">
            <div className="column">
                <div className="row">
                    <div className="col">keep</div>
                </div>
                <div className="row">
                    <div className="col">Hi</div>
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Login</label>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" />
                            <p>Not a member? <a href="/signupnow" >Sign-up now</a> </p>
                        </form>
                    </div>
                    <div className="col">Kelo</div>
                </div>
                <div className="row">
                    <div className="col">keep</div>

                </div>

            </div>

        </div>
    )

}
export default Login
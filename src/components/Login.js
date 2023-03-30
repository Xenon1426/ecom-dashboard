import React from "react"
import { useState,useEffect} from "react";
import {useNavigate } from "react-router-dom";
const Login=()=>{
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
    useEffect(() => {
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    }
      )
    const handlelogin=async ()=>{
        console.log(email,password)
        let result = await fetch('http://localhost:8000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result=await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
        }

        else{
            alert("Wrong Details entered!!")
        }
    }
    return(
    <div className="login">
    <h1>Log In</h1>
    <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
    <input className="inputBox" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
    <button onClick={handlelogin} className="logbutton" type="button">Log In</button>
</div>
    )
}

export default Login;
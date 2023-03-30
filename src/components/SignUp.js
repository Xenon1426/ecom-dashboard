import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css'
const SignUp=()=>{
    const [name,setName]=useState("");
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
    
    const collectData=async ()=>{
        let result = await axios.post('http://localhost:8000/register',{name,email,password},
        {
            headers:{
                'Content-Type':'application/json'
            }
        }
        )

        result=result.data;
        localStorage.setItem("user",JSON.stringify(result));
        if(result){
         navigate('/');
        }
    }
    return(
        <div className="sign-up">
            <h1 >Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password" />
            <button className="appButton" onClick={collectData} type="button">Sign Up</button>
        </div>
    )
}
export default SignUp;
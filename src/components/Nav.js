import React from "react";
import {Link, useNavigate} from 'react-router-dom'
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/signup")
    }
    return(
        <div>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UoeaXgt_yoxubCN82mQYENGOUlaBb3ZrxLpC2Mm7ncH9UtEE54hgYUj-Epu8rdf4k5s&usqp=CAU" alt="halwa"/>
        <h1 className="logo">ByHeart.com</h1>
            {auth? <ul className="nav-ul">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                </ul>
            }
        
        </div>
    )
}

export default Nav;
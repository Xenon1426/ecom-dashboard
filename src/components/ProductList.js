import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { set } from "mongoose";
const ProductList=()=>{
const[products,setProducts]=useState([]);
useEffect(() => {
    getProducts();
},[]);

const getProducts=async()=>{
let result=await axios.get("http://localhost:8000/products");
setProducts(result.data);
}

const searchHandle=async(event)=>{
    let key=event.target.value
    if(key){
        let result=await axios.get(`http://localhost:8000/search/${key}`)
        result=result.data
        setProducts(result)
    }
    else{
        getProducts()
    }
  
}
return(
    <>
    <h3 className="prolist">Product List</h3>
 <div className="product-list">

<input className="searchbox" onChange={searchHandle} type="text" placeholder="Enter Name" />
{/* <button className="searchbutton" type="button">Search</button> */}

   <ul className="head">
    <li>S.No.</li>
    <li>Name</li>
    <li>Price</li>
    <li>Category</li>
    <li>Operation</li>
   </ul>
{Array.isArray(products) &&
    products.map((item,index)=>
    <ul>
    <li>{index+1}</li>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.category}</li>
    <li><button className ="gui" type="button" onClick={async()=>{
let result=await axios.delete(`http://localhost:8000/product/${item._id}`);
result=await result.data;
if(result){
    getProducts();
}
    }}>Delete</button> <Link className="linku" to={`/update/${item._id}`} >Update</Link></li>
    
   </ul>)
}
</div>
</>
 )
}

export default ProductList;
import React from 'react'
import { useState } from 'react';
const AddProduct=()=>{
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');

    const addProduct=async()=>{
        console.log(name,price,category,company);
        if(!name || !price || !category || !company){
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:8000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        
       result= await result.json();
       console.log(result);
}
return(
    <div className="add-product">
        <h3>Add Product</h3>

        <input className="inputBox" value={name} type="text" placeholder='Enter Product Name' onChange={(e)=>{
            setName(e.target.value)
        }}/>
        {!name ? <span className='completion'>Enter Valid Name!</span>:<></>}

        <input className="inputBox" value={price} type="text" placeholder='Enter Product Price' onChange={(e)=>{
            setPrice(e.target.value)
        }}/>
        {!price ? <span className='completion'>Enter Valid Price!</span>:<></>}

        <input className="inputBox" value={category} type="text" placeholder='Enter Product Category' onChange={(e)=>{
            setCategory(e.target.value)
        }}/>
        {!category ? <span className='completion'>Enter Valid Category!</span>:<></>}

        <input className="inputBox" value={company}type="text" placeholder='Enter Product Company' onChange={(e)=>{
            setCompany(e.target.value)
        }}/>
        {!company ? <span className='completion'>Enter Valid Company!</span>:<></>}

        <button onClick={addProduct}className="logbutton">Add Product</button>

    </div>
);
}
export default AddProduct;
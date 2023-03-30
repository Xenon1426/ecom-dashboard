import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'
const UpdateProduct=()=>{
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async()=>{
        let result=await axios.get(`http://localhost:8000/product/${params.id}`)
        result=result.data;
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        let result = await axios.put(`http://localhost:8000/update/${params.id}`, {
          name,
          price,
          category,
          company,
        });
        result=result.data;
        console.log(result);
        navigate('/');
      };

return(
    <div className="add-product">
        <h3>Update Product</h3>

        <input className="inputBox" value={name} type="text" placeholder='Enter Product Name' onChange={(e)=>{
            setName(e.target.value)
        }}/>

        <input className="inputBox" value={price} type="text" placeholder='Enter Product Price' onChange={(e)=>{
            setPrice(e.target.value)
        }}/>

        <input className="inputBox" value={category} type="text" placeholder='Enter Product Category' onChange={(e)=>{
            setCategory(e.target.value)
        }}/>

        <input className="inputBox" value={company}type="text" placeholder='Enter Product Company' onChange={(e)=>{
            setCompany(e.target.value)
        }}/>

        <button onClick={updateProduct} className="logbutton">Update</button>

    </div>
);
}
export default UpdateProduct;
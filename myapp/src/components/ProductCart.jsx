import React from 'react'
import styled from "styled-components";
export const ProductCart = ({title,desc,price,discountprice,rating,images,id,brand,category,key}) => {

  
  return (
    <DIV>
  
      <img src={images[0]} alt="image"></img>
        <h3>title:{title}</h3>
        <h3>Price: {price}</h3>
        <h3>Dicounted-Price: {discountprice}</h3>
        <p>Rating: {rating}</p>
        <p>Brand: {brand}</p>
       
        
     
       
       
    </DIV>
  )
}

const DIV = styled.div`
  padding: 10px;
  height: 700px;
  margin: auto;
  border: 1px solid green;
  width: 250px;

  img {
    width: 100%;
    max-height: 200px;
    border: 1px solid blue;
  }
`;


 
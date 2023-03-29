


import React from 'react'
import { ProductList } from '../components/ProductList'
import { Sidebar } from '../components/Sidebar'
import styled from 'styled-components'

export const MineralSupplementPage = () => {
  return (
    <DIV>
      <div className='sidebar'><Sidebar></Sidebar></div>
      
      <div className='productlist'><ProductList></ProductList></div>
      
    </DIV>
  )
}

const DIV = styled.div`
display:flex;

.sidebar{
  width:15%;
  border-right:1px solid black;
  padding:30px;
}

.productlist{
  width:85%;
}


`;

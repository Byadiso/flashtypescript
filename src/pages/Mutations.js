import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const CREATE_PRODUCT = gql`
    query CreateProduct($name: String!, $quantityperUnit: Int!){
            createProduct(record:{name: $name, quantityperUnit: $quantityperUnit}){

                record {                  
                        name                
                }
            }
        }
`

export default function Mutation() {

    const [name, setname ]= useState("");

    const [createproduct, {loading,error,data}] = useMutation(GET_CHARACTER_LOCATION, {
        variables:{
            name:"something",
            quantityperUnit:4
        }
    })

  return (
    <div>
       
        <button onClick={()=>createproduct()}>CreateProduct</button>  
     
    </div>
  ) 
}

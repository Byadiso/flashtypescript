import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATION = gql`
    query GetCharacterLocations($name: String!){
            characters(filter:{name: $name}){
                results{
                    location{
                        name
                    }
                }
            }
        }
`

export default function Search() {

    const [name, setname ]= useState("");

    const [getLocations, {loading,error,data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables:{
            name
        }
    })

  return (
    <div>
        <input value ={name} onChange={(e)=>{ setname(e.target.value)} }/>
        <button onClick={(e)=>getLocations()}>Search</button>  
        {loading && <div className="loading">Loading...</div>}    
        {error && <div className="error">{error}</div>}    
        {data&& (
            <ul>
                {data.characters.results.map(
                    (character)=>{
                        return <li> {character.location.name}</li>
                    }
                )}

            </ul>
        )}  
    </div>
  ) 
}

import React from 'react'
import {
  
  Link,
} from "react-router-dom";
import { useCharacters } from '../hook/useCharacters'
import "./CharacterList.css"
import  Card  from '../pages/Card.js'


export default function CharactersList() {
    const {error,loading,data} = useCharacters()

    console.log(data && data.feed.links)
    
    if (loading) return <div>loading......</div>
    if (error) return <div>{error}</div>

  return (
    <div className="CharactersList">
     {data && data.feed.links.map(feed =>{
        return (
          <div key={feed.id} className="flash-card">
              <h1>Flash Cards</h1>
              <h3>Click on the card  to reveal the secret capital</h3>
              <p>description:{feed.description}</p>
                <Link to={`/${feed.id}`}>
                    <h2 >Url:{feed.url}</h2>
                </Link>   
                
          </div>
                     
        )
     })}
    </div>
  )
}

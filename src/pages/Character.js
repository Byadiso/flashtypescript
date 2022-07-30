import React from 'react'
import { useParams } from 'react-router'
import { useCharacter } from '../hook/useQuestion'
import "./Character.css"

export default function Character() {
    const {id} = useParams();
    const {error,loading,data} = useCharacter(id)
    
    if (loading) return <div>loading......</div>
    if (error) return <div>{error}</div>

  return (
    <div className="Character">                
        <image scr={data.image}/>
        <div className="character-content">
        <h3>{data.name}</h3>
        </div>
    </div>
  )
}

import React, {useState} from 'react'
import "./card.css"

export default function Card({frontSide, backSide}) {
    const [text, setText] = React.useState("frontSide");
    
    function handleClick(){
        setText(backSide)
    }

    return (
            <div className="flash-card" onClick={handleClick()}>{text}</div>
        )
}

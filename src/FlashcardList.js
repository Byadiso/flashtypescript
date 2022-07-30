import React from 'react'
import Flashcard from './Flashcard';
import { useCharacters } from './hook/questions'

export default function FlashcardList() {
    const {error,loading,data} = useCharacters()
    console.log(data)
    
  const flashcards=[
    {
      id:"1",
      answer:"yes",
      options: ["yes", "no"],
      question:"is kigali capital of rwanda"
    },
    {
        id:"2",
      answer:"yes",
      options: ["yes", "no"],
      question:"is kigali capital of rwanda"
    },
    {
        id:"3",
      answer:"12",
      options: ["6", "1"],
      question:"6+6"
    },
  ]
  return (
    <div className="card-grid">
      {data && data.feed.links.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
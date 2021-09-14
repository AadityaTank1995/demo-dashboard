import React, { useState } from 'react'
import Categories from './CardsComponents/Categories'
import Overview from './CardsComponents/Overview'
import Placeholder from './CardsComponents/Placeholder'
import Projections from './CardsComponents/Projections'
import Trends from './CardsComponents/Trends'

const initCards = [Overview, Trends, Projections, Categories, Placeholder, Placeholder]

const Cards = () => {
  const [cards, setCards] = useState(initCards)
  const moveRight = (index) => {
    if (index !== cards.length) {
      let arr = [...cards]
      let temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
      setCards(arr)
    }
  }
  const moveLeft = (index) => {
    if (index !== 0) {
      let arr = [...cards]
      let temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      setCards(arr)
    }
  }
  return (
    <div className='cards-container'>
      {cards.map((Card, index) => (<Card key={index} index={index} moveRight={moveRight} moveLeft={moveLeft} length={cards.length}/>))}
    </div>
  )
}

export default Cards

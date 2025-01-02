import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <>
    <div className="cards">
      <h1>Check out these Destinations!</h1>
      <div className="cards-container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src = 'images/img-9.jpg'
            text = 'Explore the hidden waterfall deep inside the Amazon jungal'
            label = 'Advanture'
            path = '/products'
            />
            <CardItem src = 'images/img-6.jpg'
            text = 'Every man in the life has a chance to touch the sky'
            label = 'Luxry'
            path = '/products'
            />
          </ul>
          <ul className="cards__items">
            <CardItem src = 'images/img-7.jpg'
            text = 'Explore the hidden waterfall deep inside the Amazon jungal'
            label = 'Advanture'
            path = '/contacts'
            />
            <CardItem src = 'images/img-8.jpg'
            text = 'Explore the hidden waterfall deep inside the Amazon jungal'
            label = 'Advanture'
            path = '/Abouts'
            />
            <CardItem src = 'images/img-4.jpg'
            text = 'Explore the hidden waterfall deep inside the Amazon jungal'
            label = 'Advanture'
            path = '/Products'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards

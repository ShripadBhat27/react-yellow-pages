import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Buisnesses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Car Repairs & sevices'
              label='Nakoda Motors'
              path='/nakoda-motors'
            />
            <CardItem
              src='images/img2.jpg'
              text='Enjoy fresh & delicious Fruits Now. Order Online!'
              label='Delicious Fruits World'
              path='/delicious-fruits-world'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Beaty Parlours, Bridal Makeup, Hair Stylists'
              label='Rejoice Beaty Saloon'
              path='/rejoice-beaty-saloon'
            />
            <CardItem
              src='images/img4.jpg'
              text='A lot can happen over Coffee!'
              label='Cafe Coffee Day'
              path='/cafe-coffee-day'
            />
            <CardItem
              src='images/img5.jpg'
              text='From fresh fruits, vegetables to dairy, cereals & spices, we have the entire gamut of your grocery needs covered.'
              label='Royal Kirana Store'
              path='/royal-kirana-store'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

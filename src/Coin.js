import React from 'react';
import './Coin.css';

const Coin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
  }) => {
    return (
        <div className='coin-container'>
          <div className='coin-row'>
            <div className='coin'>
            <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
          </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
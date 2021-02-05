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
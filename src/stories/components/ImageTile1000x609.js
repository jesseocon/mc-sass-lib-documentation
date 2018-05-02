import React, { Component } from 'react'

export const imageTile1000x609Description = {
  text: 'The image tile is a background cover tile representing a navigation element to an instructor',
  inline: true,
  source: true,
  header: true,
  maxPropStringLength: 200,
}

export default () =>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6 col-lg-6 col-xl-4'>
        <div className='tile tile--with-gradient tile--1000x609 tile--hover-zoom'>
          <img src='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/382/original/1502152798-1479465418-HZ_ClassTiles_V1_C.jpg%3F1502152798' className='fill' />
          <div className='content'>
            <div class="tile-caption tile-caption--horizontal-centered">
              <div class="tile-caption__container">
                <h3 class="tile-caption__title">Hans Zimmer</h3>
                <h4 class="tile-caption__subtitle">Teaches Something Interesting</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

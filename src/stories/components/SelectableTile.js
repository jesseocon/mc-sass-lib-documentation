import React from 'react'
import Checkmark from '../image-files/circle-check.svg'

export const selectableTileDescription = {
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
        <div className='tile tile--with-gradient tile--16x9 tile--hover-zoom overlay-check'>
          <img src='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/382/original/1502152798-1479465418-HZ_ClassTiles_V1_C.jpg%3F1502152798' className='fill' />
          <div className='content'>
            <div className="tile-caption tile-caption--horizontal-centered">
              <div className="tile-caption__container">
                <h3 className="tile-caption__title">Hans Zimmer</h3>
                <h4 className="tile-caption__subtitle">Teaches Something Interesting</h4>
              </div>
            </div>
            <a class="overlay-check__checkbox-tile-overlay">
              <img className="overlay-check__image" src="/static/media/circle-check.8d555ef9.svg" alt="checkmark" />
            </a>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-lg-6 col-xl-4'>
        <div className='tile tile--with-gradient tile--16x9 tile--hover-zoom overlay-check overlay-check--checked'>
          <img src='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/382/original/1502152798-1479465418-HZ_ClassTiles_V1_C.jpg%3F1502152798' className='fill' />
          <div className='content'>
            <div className="tile-caption tile-caption--horizontal-centered">
              <div className="tile-caption__container">
                <h3 className="tile-caption__title">Hans Zimmer</h3>
                <h4 className="tile-caption__subtitle">Teaches Something Interesting</h4>
              </div>
            </div>
            <a class="overlay-check__checkbox-tile-overlay">
              <img className="overlay-check__image" src={Checkmark} alt="checkmark" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

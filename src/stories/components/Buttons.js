import React from 'react'

export const buttonsDescription = {
  text: 'The image tile is a background cover tile representing a navigation element to an instructor',
  inline: true,
  source: true,
  header: true,
  maxPropStringLength: 200,
}

export default () =>
  <div className='container thirty-gutter-grid'>
    <div className='row'>
      <div className='col-sm-4'>
        <h2 className='heading-primary'>primary wide</h2>
        <button className='c-button c-button--wide c-button--primary'>Continue</button>
      </div>
      <div className='col-sm-4'>
        <h2 className='heading-primary'>secondary wide</h2>
        <button className='c-button c-button--wide c-button--secondary'>Continue</button>
      </div>
      <div className='col-sm-4'>
        <h2 className='heading-primary'>tertiary wide</h2>
        <button className='c-button c-button--wide c-button--tertiary'>Continue</button>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-4'>
        <h2 className='heading-primary'>primary normal</h2>
        <button className='c-button c-button--primary'>Continue</button>
      </div>
      <div className='col-sm-4'>
        <h2 className='heading-primary'>secondary normal</h2>
        <button className='c-button c-button--secondary'>Continue</button>
      </div>
      <div className='col-sm-4'>
        <h2 className='heading-primary'>tertiary normal</h2>
        <button className='c-button c-button--tertiary'>Continue</button>
      </div>
    </div>
  </div>

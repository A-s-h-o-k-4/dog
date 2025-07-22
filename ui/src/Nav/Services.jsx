import React from 'react'

function Services() {
  return (
    <div className='container-fluid row mt-5 d-flex justify-content-evenly' style={{position:'relative',left:'10%'}}>
      <div className='col-4'>
        <img src="/care1.jpeg" alt="care" />
          <ul>
            <h2>Pet Care</h2>
            <li>Daily Exercise</li>
            <li>Balanced Nutrition</li>
            <li>Fresh Water Always</li>
            <li>Love & Attention</li>
          </ul>
      </div>
      <div className='col-4'>
        <img src="/cut.png" alt="haircut"/>
          <ul>
            <h2>Pet Beauty</h2>
            <li>Bathing with gentle, pet-safe shampoo</li>
            <li>Fur trimming and haircuts</li>
            <li>Nail clipping and paw care</li>
            <li>Ear and eye cleaning</li>
          </ul>
      </div>
      <div className='col-4'>
        <img src="/guide.jpeg" alt="guide" />
          <ul>
            <h2>Pet Guide</h2>
            <li>Choosing the Right Pet</li>
            <li>Feeding & Nutrition</li>
            <li>Safety Tips</li>
            <li>Exercise & Play</li>
          </ul>
      </div>
    </div>
  )
}

export default Services

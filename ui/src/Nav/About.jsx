import React from 'react'

function About() {
  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <h1>Oneday You will Think</h1>
        <img src="/dog.png" alt="dog" />
      </div>
      <div className='row'>
        <div className='col-6 text-center'>
          <h2 className='text-success fw-bold'>Services</h2>
          <ul className='list-unstyled'>
            <li className='text-dark text-bold fs-5 fw-bold'>Pet Care</li>
            <li className='text-dark text-bold fs-5 fw-bold'>Pet Beauty</li>
            <li className='text-dark text-bold fs-5 fw-bold'>Pet Guide</li>
          </ul>
        </div>
        <div className='col-6 text-center'>
          <h2 className='text-success fw-bold'>Contact</h2>
          <ul className='list-unstyled'>
            <li className='text-dark fs-5 fw-bold'>9876543210</li>
            <li><a href="#" className='text-decoration-none text-dark fw-bold fs-5'>petcare@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import "./Filterbar.css"

const Filterbar = () => {
  return (
    <div className='filter-bar'>
     <div className='filter-bar-left'>
     <button className='filter-bar-btn'>All</button>
      <button className='filter-bar-btn'>Basketball</button>
      <button className='filter-bar-btn'>Cricket</button>
      <button className='filter-bar-btn'>Badminton</button>
      <button className='filter-bar-btn'>Football</button>
     </div>
     <div className='filter-bar-right'>
     <input type="checkbox" id="latest" name="latest"/>
      <label for="latest">Latest Videos</label>
     </div>
    </div>
  )
}

export default Filterbar
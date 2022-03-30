import React from 'react'
import "./Home.css"
import Filterbar from '../../Components/Filtersbar/Filterbar'
import Videolisting from '../VideoListing/Videolisting'

const Home = () => {

  return (
    <div className='vid-home-page'>
        <Filterbar/>
         <Videolisting/>
    </div>
  )
}

export default Home
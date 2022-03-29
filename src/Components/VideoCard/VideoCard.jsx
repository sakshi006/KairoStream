import React from 'react'
import "./VideoCard.css"

const VideoCard = () => {
  return (
     <div class="cardcom background">
     <div class="card">
         <img class="card-image-one" src="https://media.istockphoto.com/photos/two-professional-basketball-players-fight-fo-a-ball-picture-id1143056382?b=1&k=20&m=1143056382&s=170667a&w=0&h=cF0Db2CC75ERHZ3DcEcV9l0Y2IyEZdxejoX3x5kaKyo=" alt="card" />
         <article class="card-text-one">
           <figcaption>
8 times stephen curry shocked the world</figcaption>
           <h5>Supplier name</h5>
           <summary>Published on : 20 march 2202</summary>
           </article>
         <footer>
           <span>Watch Later</span>
           <ul>
             <i class="fas fa-heart"></i>
             <i class="fas fa-share-alt"></i>
           </ul>
         </footer>
     </div>
 </div>
  )
}

export default VideoCard
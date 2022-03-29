import React from 'react'
import "./VideoCard.css"

const VideoCard = () => {
  return (
     <div class="cardcom background">
     <div class="card">
         <img class="card-image-one" src="../../assets/avatar/card-image.jpg" alt="card-image" />
         <article class="card-text-one">
           <figcaption>"That's my spot."</figcaption>
           <h6>- Sheldon Cooper</h6>
           <summary>In an ever-changing world it is a single point of consistency.</summary>
         </article>
         <footer>
           <span>Read</span>
           <span>Bookmark</span>
           <ul>
             <i class="fas fa-heart"></i>
             <i class="fas fa-share-alt"></i>
             <i class="fas fa-ellipsis-v"></i>
           </ul>
         </footer>
     </div>
 </div>
  )
}

export default VideoCard
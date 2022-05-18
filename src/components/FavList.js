import React from 'react'
import AnimeCard from './AnimeCard'
function FavList(favanime) {
  function d (e){
    e.preventDefault()
    console.log(favanime)
  }
  d()
  return (
    <aside>
            <nav>
                <h3>Top Anime</h3>
                <ol>
                    <li>{favanime}</li>
                    </ol>      
            </nav>
        </aside>
  )
}

export default FavList
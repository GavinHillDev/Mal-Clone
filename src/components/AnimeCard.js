import React, { useState } from 'react'
import FavList from './FavList';

function AnimeCard({ anime, props }) {
    const [favanime, SetFavList] = useState([])
    function handleClick(e) {
        e.preventDefault();
        SetFavList(anime.title)
        
      }
      <FavList favanime ={favanime} />
      
    return (
        <article className='anime-card'>
            {/* <a href={anime.url} target="_blank" rel="noreferrer"> */}
                <figure>
                    <img src={anime.images.jpg.large_image_url} alt="Anime Image"
                    />
                </figure>
                <h3>{anime.title}</h3>
                <h3> {anime.episodes + " Episodes |" + anime.duration}</h3>
                <button className='addbutton' onClick={handleClick}>Add To List</button>
            {/* </a> */}
        </article>
    )
}

export default AnimeCard
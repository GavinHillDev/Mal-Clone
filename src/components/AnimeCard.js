import React, { useState, useEffect } from 'react'
import FavList from './FavList';
import {Link} from "react-router-dom"

function AnimeCard({ anime, animeList }) {
    const [favanime, SetFavList] = useState([])
    
    const  addToFav = () => {
        console.log(anime)
        SetFavList([...favanime, {...anime}])
        console.log(favanime)
      }
     
      
    return (
        <article className='anime-card' key={anime.mal_id}>
            {/* <a href={anime.url} target="_blank" rel="noreferrer"> */}
                <figure>
                    <img src={anime.images.jpg.large_image_url} alt="Anime Image"
                    />
                </figure>
                <h3>{anime.title}</h3>
                <h3> {anime.episodes + " Episodes |" + anime.duration}</h3>
                <button className='addbutton' onClick={addToFav}>Add To List</button>
            {/* </a> */}
        </article>
    )
    
}

export default AnimeCard
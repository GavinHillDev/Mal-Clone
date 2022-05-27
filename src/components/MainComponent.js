import React from 'react'
import { useState } from 'react';
import AnimeCard from "./AnimeCard";
import {Link} from "react-router-dom"
function MainContent(props) {
 const addToFav = () => {
    console.log('ss')
  }
   
    return (
        <main>
            <div className='buttongroup'>
                <Link to={"/login"} state={{anime : props.animeList  }}> <button>Favorites</button></Link>
           </div>
            <div className='main-head'>
            <form className='search-box' onSubmit={props.HandleSearch}>
                <input type='search'
                    placeholder="Search For An Anime"
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)} />
            </form>
        </div>
            <div className='anime-list'>
                {props.animeList.map(anime => (
                    <AnimeCard
                        animeList={props.animeList}
                        anime={anime}
                        key={anime.mal_id}
                        />
                ))}
            </div>
        </main>
    )
}

export default MainContent
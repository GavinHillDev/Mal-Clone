import React from 'react'
import AnimeCard from "./AnimeCard";
import {Link} from "react-router-dom"
function MainContent(props) {
    return (
        <main>
            <div className='buttongroup'>
                <Link to="/login"> <button>Login</button></Link>
            <button>Sign In</button></div>
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
                        anime={anime}
                        key={anime.mal_id} />
                ))}
            </div>
        </main>
    )
}

export default MainContent
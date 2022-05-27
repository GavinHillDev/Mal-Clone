import React from 'react'

function Favlist({ topManga }) {
    return (
        <aside>
            <nav>
                <h3>Top Manga</h3>
                <ol>
                    {topManga.map(manga => (
                        <a href={manga.url} target="_blank" key={manga.mal_id} rel="noreferrer"><li>{manga.title}</li></a>
                    ))}</ol>


            </nav>
        </aside>
    )
}

export default Favlist
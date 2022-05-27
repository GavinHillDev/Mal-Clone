import React, { useEffect, useState,  } from 'react'
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import Favlist from './components/FavList'
import {Link} from "react-router-dom"

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  const [topManga, SetTopManga] = useState([])
  const [favanime, SetFavList] = useState([])
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
      .then(res => res.json());
    SetTopAnime(temp.data.slice(0, 10));
  }
  const GetTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/manga?filter=bypopularity`)
      .then(res => res.json());
    SetTopManga(temp.data.slice(0, 10));
  }
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)
  }
  
  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=favorites&sort=asc&limit=15`)
      .then(res => res.json());
    SetAnimeList(temp.data)
  }
  useEffect(() => {
    GetTopAnime();
    GetTopManga();
  }, []);


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        
        <MainComponent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList} />
          
          <Favlist topManga={topManga} />
      </div>
    </div>
  )
}

export default App;

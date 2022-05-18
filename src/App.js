import React, { useEffect, useState,  } from 'react'
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import {Link} from "react-router-dom"
import Login from './routes/login';
import FavList from './components/FavList';
import AnimeCard from './components/AnimeCard';
function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  const [favanime, SetFavList] = useState([])
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
      .then(res => res.json());
    SetTopAnime(temp.data.slice(0, 10));
  }
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)
  }
  
  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=favorites&sort=asc&limit=15`)
      .then(res => res.json());
    console.log(temp)
    SetAnimeList(temp.data)
    console.log(temp.data)
  }
  useEffect(() => {
    GetTopAnime();

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
          
         
      </div>
    </div>
  )
}

export default App;

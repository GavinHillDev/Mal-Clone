import Header from "../components/Header";
import {useLocation, Link} from 'react-router-dom'
import AnimeCard from "../components/AnimeCard";

export default function Login({props}) {

  const location = useLocation()
   var animeCist = location.state?.anime

  console.log(animeCist)
    return (
        <div className="login">
        <Header />
        <Link to={"/"} > <button>Login</button></Link>
        <div className='anime-list'>
                {animeCist.map(anime => (
                    <AnimeCard
                        animeList={animeCist}
                        anime={anime}
                        key={anime.mal_id} />
                ))}
            </div>
         </div>
    );
  }

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';



function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0'); // months are 0-based
  const day = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function Games(props) {  

const [gamesListing, setGamesListing] = useState(props.games);
const [gameID, setGameID] = useState();
const dateValue = formatDate(new Date());
const [message, setMessage] = useState();
const [status, setStatus] = useState();
const [dataDefault, setDataDefault] = useState({
  teamName : '',
  opponentName : '',
  gameDate : dateValue,
  gameID: gameID,
  1: {
    tir: 0,
    tirContre: 0,
    but: 0,
    butContre: 0,
  },
  2: {
    tir: 0,
    tirContre: 0,
    but: 0,
    butContre: 0,
  },
  3: {
    tir: 0,
    tirContre: 0,
    but: 0,
    butContre: 0,
  }
})

const [game, setGame] = useState(dataDefault);

const creatGame = () => {

  setStatus('loading');
  setMessage('');


  const finalFormEndpoint = 'http://localhost:8888/api/reacthockeyapp/savegame.php';
  // const data = Array.from(e.target.elements)
  //   .filter((input) => input.name)
  //   .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

  // if (additionalData) {
  //   Object.assign(data, additionalData);
  // }

  fetch(`http://127.0.0.1:8888/api/reacthockeyapp/savegame.php`, {
    method: 'POST',
    mode: 'cors',
    credentials: "include",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then(() => {
      setMessage("We'll be in touch soon.");
      setStatus('success');
    })
    .catch((err) => {
      setMessage(err.toString());
      setStatus('error');
    });
};

useEffect(()=> {
  console.log(gamesListing[0].jsonGame);
  const gametesting = JSON.parse(gamesListing[0].jsonGame);
  console.log(gametesting);
},[]);


const router = useRouter();


return (
    <div className={styles.container}>
      <Head>
        <title>Hockey Count</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hockey Count</h1>
      <main className={styles.main}>
        <ul>
        { gamesListing.map((game, i) => {

          const gameData = JSON.parse(game.jsonGame);

          
          return(
              <li key={game.gameID} ><a href={`/gamesedit/${game.gameID}`} >   {gameData.teamName} {gameData.opponentName} {gameData.gameDate}</a></li>
              
          )
          setGameID(game.gameID);
        })} 
        </ul> 
        <button className={styles.pushable} onClick={creatGame}>
                  <span className={styles.shadow}></span>
                  <span className={styles.edge} ></span>
                  <span className={styles.front} >Creat A New Game</span>
          </button>

        </main>
    </div>
  )
}

export async function getStaticProps(context) {
    const res = await fetch(`http://127.0.0.1:8888/api/reacthockeyapp/listGame.php`);
    const games = await res.json();

    return {
      props: { games }, 
    }
  }

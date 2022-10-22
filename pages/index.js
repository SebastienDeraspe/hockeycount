import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { getDatabase, onValue, ref } from 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwZGTV9_dQbGk04KrOmW_UPe8Nt6Gy1U",
  authDomain: "hockeycount.firebaseapp.com",
  databaseURL: "https://hockeycount-default-rtdb.firebaseio.com",
  projectId: "hockeycount",
  storageBucket: "hockeycount.appspot.com",
  messagingSenderId: "488246008787",
  appId: "1:488246008787:web:ec5d779ed4f30ef5132d26",
  measurementId: "G-6DNN2BPN2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getDatabase();
const reference = ref(db, 'users/userid');

// onValue(distanceRef, (snapshot) => { 
//   const data = snapshot.val();
//   updateDistance(postelement, data);
// })

// console.log(data);


export default function Home(props) {


  const router = useRouter();
//  console.log(router);
const [periode, setPeriode] = useState(1);
const [game, setGame] = useState({
  gameID: 1,
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
});


  function CountData(action) {
    action.preventDefault();
    const  currentTire = tirInputRef.current.value;
  };

 console.log(game);

  // function gameAction(periode, action) {

  //     setGame({
  //       ...game,
  //       [1]: {
  //         ...game[1],
  //         tir: game[1].tir + 1
  //     }
  //   })
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Game ID : {game.gameID}<br/>
      Game Periode : {periode}
      <main className={styles.main}>

          <div className={styles.colonne} >        
             <button className={styles.pushable} onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  tir: game[periode].tir + 1
                }
            })
            }>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >+ Tir</span>
              </button> 
              <button className={styles.pushable} disabled={ game[periode].tir == 0 ? 'true' : '' } onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  tir: game[periode].tir - 1
                }
            })
            }>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >- Tir</span>
              </button>                         
          </div>
          <div className={styles.colonne} >        
          <button className={styles.pushable}  onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  tirContre: game[periode].tirContre + 1
                }
            })}>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >+ Tir contre</span>              
               </button>
            <button className={styles.pushable} disabled={ game[periode].tirContre == 0 ? 'true' : '' }  onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  tirContre: game[periode].tirContre - 1
                }
            })}>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >- Tir contre</span>              
               </button>      
          </div>
            <div className={styles.colonne} >        
            <button className={styles.pushable} onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  but: game[periode].but + 1
                }
            })}>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >+ But</span>
              </button> 
              <button className={styles.pushable} disabled={ game[periode].but == 0 ? 'true' : '' } onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  but: game[periode].but - 1
                }
            })}>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >- But</span>
              </button> 

          </div>
          <div className={styles.colonne} >        
          <button className={styles.pushable} onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  butContre: game[periode].butContre + 1
                }
            })}>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >+ But contre</span>
              </button>
              <button className={styles.pushable} disabled={ game[periode].butContre == 0 ? 'true' : '' } onClick={() => setGame({
                ...game,
                [periode]: {
                  ...game[periode],
                  butContre: game[periode].butContre - 1
                }
            })}>
                <span className={styles.shadow}></span>
                <span className={styles.edge} ></span>
                <span className={styles.front} >- But contre</span>
              </button>    
          </div>
            Tires
          <div className={styles.resultat}>
            <div className={styles.CountData}>Équipe</div>  
            <div className={styles.CountData}>Période 1</div>  
            <div className={styles.CountData}>Période 2</div>  
            <div className={styles.CountData}>Période 3</div>                        
          </div>  

          <div className={styles.resultat}>
            <div className={styles.CountData}>Votre équipe </div>
            <div className={styles.CountData}>{game[1].tir}</div>
            <div className={styles.CountData}>{game[2].tir}</div>
            <div className={styles.CountData}>{game[3].tir}</div>
          </div>
          <div className={styles.resultat}>
            <div className={styles.CountData}>Votre adversaire</div>
            <div className={styles.CountData}>{game[1].tirContre}</div>
            <div className={styles.CountData}>{game[2].tirContre}</div>
            <div className={styles.CountData}>{game[3].tirContre}</div>
          </div>
          buts 
          <div className={styles.resultat}>
            <div className={styles.CountData}>Votre équipe </div>
            <div className={styles.CountData}>{game[1].but}</div>
            <div className={styles.CountData}>{game[2].but}</div>
            <div className={styles.CountData}>{game[3].but}</div>
          </div>
          <div className={styles.resultat}>
            <div className={styles.CountData}>Votre adversaire</div>
            <div className={styles.CountData}>{game[1].butContre}</div>
            <div className={styles.CountData}>{game[2].butContre}</div>
            <div className={styles.CountData}>{game[3].butContre}</div>
          </div>

          <div className={styles.resultat}>
            <div className={styles.CountData}>
                <button className={styles.pushable} onClick={() => setPeriode(1)}>
                  <span className={styles.shadow}></span>
                  <span className={styles.edge} ></span>
                  <span className={styles.front} >1</span>
                </button>
            </div>
            <div className={styles.CountData}>
            <button className={styles.pushable} onClick={() => setPeriode(2)}>
                  <span className={styles.shadow}></span>
                  <span className={styles.edge} ></span>
                  <span className={styles.front} >2</span>
                </button>
            </div>
            <div className={styles.CountData}>
              <button className={styles.pushable} onClick={() => setPeriode(3)}>
                  <span className={styles.shadow}></span>
                  <span className={styles.edge} ></span>
                  <span className={styles.front} >3</span>
                </button>
            </div>
          </div>

      </main>
    </div>
  )
}
// Import the functions you need from the SDKs you need
import '../styles/globals.css'
import { useState } from "react";


function MyApp({ Component, pageProps }) {

  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = {[event.target.name]: event.target.value };
    setData({ ...data, ...newInput});
  }

  const handleSubmit = () => {};

  return <Component {...pageProps} />
}

export default MyApp;

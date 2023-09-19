// Import the functions you need from the SDKs you need
import '../styles/globals.css'
import { useState } from "react";
import Layout from '../components/layout'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from "next/app";
import { initializeApp } from 'firebase/app';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import configuration from '../configuration';

import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  inMemoryPersistence,
} from 'firebase/auth';

function MyApp(props) {

  const { Component, pageProps } = props;
  const [data, setData] = useState({});
  
  const handleInput = (event) => {
    let newInput = {[event.target.name]: event.target.value };
    setData({ ...data, ...newInput});
  }

  const handleSubmit = () => {};

  return (

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout>
          <Component {...pageProps} />
      </Layout>
      </LocalizationProvider>
  )
}

export default MyApp;

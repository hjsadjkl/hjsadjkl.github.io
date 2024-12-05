import React from 'react';
import Layout from '../components/layout'
import Navbar from '../components/navbar';
import { AppProps } from 'next/app';
// import { Metadata } from 'next'; 



export default function MyApp({ Component, pageProps }:AppProps):JSX.Element{
  return (
    <Layout>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </Layout>
  )
}
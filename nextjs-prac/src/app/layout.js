"use client";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import './globals.css'
import { Result } from 'postcss';

//server component

// export const metadata = {
//   //metadata 약속된 상수에 타이틀 바꿔주기 
//   title: 'Web tutorials',
//   description: 'Generated by Heeeun',
// }

export default function RootLayout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(()=>{
    fetch('http//localhost:9999/topics')
      .then(resp=>resp.json())
      .then(result=>{
        setTopics(result);
      });
  },[]);
  return (
    <html>
      <body>
        <h1><a href='/'>WEB</a></h1>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
        </ol>
        {children}
        <ul>
          <li><a href='/create'>Create</a></li>
          <li><a href='/update/1'>Update</a></li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  )
} 

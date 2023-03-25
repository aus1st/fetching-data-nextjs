
import Link from 'next/link';
import React, { use } from 'react'
import useSWR from 'swr';
import { objs } from '../shared/models';


const url = 'https://rickandmortyapi.com/api/character';
const fetcher = (url:string) => fetch(url).then((res)=>res.json());

async function getAllCharacters() {
  const chars= await (await fetch('https://rickandmortyapi.com/api/character')).json();
  return chars;
}

export default async function StaticProps() {
  const result = await getAllCharacters();

  const obj:objs = result;
  return (
    <div>
     <h2 className='text-lg font-bold'>getStaticProps</h2>
      {
        
       obj.results && obj.results?.map(m=>(
          <ul key={`${m.id}_${m.name}`}>
              <Link href={`/staticprop/${m.name}`.replace(/\s+/g,"-").toLocaleLowerCase()}>
                <li className='p-1'>{m.name}</li>
              </Link>
          </ul>
        ))
      }
    
    </div>
  )
}

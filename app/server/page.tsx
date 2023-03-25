import React from 'react'
import { objs } from '../shared/models';
import Link from 'next/link';

async function getAllCharacters() {
  const chars= await (await fetch('https://rickandmortyapi.com/api/character',{cache:'no-store'})).json();
  return chars;
}

export default async function Server() {
  const result = await getAllCharacters();
  //console.log(result);

  const obj:objs = result;
  return (
    <div>
     <h2 className='text-lg font-bold'>Server Fetching getServerProps</h2>
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

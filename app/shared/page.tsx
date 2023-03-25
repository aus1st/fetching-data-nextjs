import React from 'react'
import Link from 'next/link'

const routes = [
  {name:'Server', path:'/server',index:1},
  {name:'Client', path:'/client',index:2},
  {name:'StaticProps', path:'/staticprops',index:2},
]
export default function Navbar() {
  return (
    <div className='flex justify-center  p-5 space-x-4 static top-0'>
    {
      routes.map(r=>(
        <Link className='text-lg font-bold text-orange-400' href={r.path} key={r.index}>{r.name}</Link>
      ))
    }
    </div>
  )
}

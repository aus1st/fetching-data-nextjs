import Image from 'next/image'



export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className='grow-full p-2 sm:ml-32 sm:w-3/12'>
     <h1 className='text-2xl font-bold'>Data fetching in Next.js.</h1>
      <p> Next.js provides various ways to fetch data from an API or any other source. These methods can be used to either generate static pages (SSG) or for server-side rendering (SSR). getStaticProps, getStaticPaths and getServerSideProps are used for data fetching in Next.js.</p> </div>
      </div>
    
  )
}

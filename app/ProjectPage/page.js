'use client'
import Navbar from '../Components/Navbar'
import cardList from "../data"
import Image from 'next/image'

function Home() {
  return (
    <>
      <Navbar />
  <main className='container mx-auto py-8 px-8  '>
  <div className='grid lg:grid-cols-3 gap-6'>
    {cardList.map(card => (
      <div className='shadow-lg rounded-lg '>
              <Image
                src={card.img}
                width={1200}
                height={675}
                alt="gambar project" />
        <div className='flex justify-between p-4 '>
          <div className='flex items-center '> 
             <Image className='rounded-full overflow-hidden'
                src={card.profileP}
                width={25}
                height={25}
                alt="Logo Like"
              />
            <h3 className='auth ml-2'  >{card.author}</h3>
            </div>
            <div className='flex items-center ml-2'> 
              <Image
                src="/like.svg"
                width={20}
                height={20}
                alt="Logo Like"
              />
              <p className='ml-1'>{card.like}</p>
            </div>
        </div>
        <div>
            <p className='judul ml-4 font-bold'>{card.title}</p>
        </div>
      </div>
    ))}
  </div>
</main>

    </>
  )
}

export default Home;

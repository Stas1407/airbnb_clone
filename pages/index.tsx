import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { GetStaticProps } from 'next'
import fsPromises from 'fs/promises'
import path from 'path'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import React, { ReactNode, useEffect } from 'react'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

interface HomePageProps {
  exploreData: {
    img: string;
    location: string;
    distance: string;
  }[],
  cardsData: {
    img: string;
    title: string;
  }[]
}

export default function Home({ exploreData, cardsData }: HomePageProps) {
  useEffect(() => {
    const scrollContainer = document.querySelector("#cards") as HTMLDivElement;

    const onScroll = (evt: WheelEvent) => {
      evt.preventDefault();
      scrollContainer.scroll({
        left: scrollContainer.scrollLeft + evt.deltaY*6,
        top: 0,
        behavior: "smooth"
      })
    };

    scrollContainer.addEventListener("wheel", onScroll);
  }, [])


  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-2xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, index) => (
              <SmallCard img={item.img} distance={item.distance} location={item.location} key={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold py-8'>Live Anywhere</h2>

          <div id='cards' className='flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-4 -ml-4'>
            {cardsData?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard 
          img='/4cj.webp'
          title= 'The Greatest Outdoors'
          description='Wishlist curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'static_json/explore_nearby.json')
  const exploreDataPlain = await fsPromises.readFile(filePath)
  const exploreData = JSON.parse(exploreDataPlain.toString())

  const cardsPath = path.join(process.cwd(), 'static_json/cards.json')
  const cardsDataPlain = await fsPromises.readFile(cardsPath)
  const cardsData = JSON.parse(cardsDataPlain.toString())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
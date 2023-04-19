import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  exploreData: {
    img: string
    location: string
    distance: string
  }[]
}

const Home: NextPage<Props> =  ({exploreData = []}) => {
  console.log(exploreData)
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
            <h2 className='text-2xl font-normal pb-5'>Explore Nearby</h2>


          </section>
        </main>
      </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then(res => res.json())

  return {
    props: {
      exploreData
    }
  }
}

export default Home
import type { NextPage } from 'next';
import { Header } from '../src/components/header';
import { Hero } from '../src/components/hero';
import { Infos } from '../src/components/infos';
import { History } from '../src/components/history';
import { Partners } from '../src/components/partners';
import { NextShows } from '../src/components/nextShows';
import { InfoSection } from '../src/components/infoSection';
import { Footer } from '../src/components/footer';

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Infos/>
      <History/>
      <Partners/>
      <NextShows/>
      <InfoSection/>
      <Footer/>
    </>
  )
}

export default Home

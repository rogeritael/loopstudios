import type { NextPage } from 'next';
import { AppContainer } from '../components/AppContainer';
import { GlobalStyles } from '../styles/GlobalStyles';

import { Header } from '../components/Header';
import { Cover } from '../components/Cover';
import { About } from '../components/About';
import { CreationsSection } from '../components/CreationsSection';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles />
        <Cover>
          <Header />
        </Cover>
        <AppContainer>
          <About />
          <CreationsSection />
        </AppContainer>
        <Footer />
    </>
  )
}

export default Home

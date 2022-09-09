import type { NextPage } from 'next';
import { AppContainer } from '../components/AppContainer';
import { GlobalStyles } from '../styles/GlobalStyles';

import { Header } from '../components/Header';
import { Cover } from '../components/Cover';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles />
        <Cover>
          <Header />
        </Cover>
    </>
  )
}

export default Home

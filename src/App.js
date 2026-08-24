import { useEffect, useState } from 'react';
import Atendimento from './pages/atendimento';
import Footer from './components/Footer';
import Header from './components/Header';
import Historia from './pages/historia';
import Home from './pages/home';
import Tratamentos from './pages/tratamentos';
import LoaderWidget from './components/LoaderWidget';
import WhatsAppLink from './components/WhatsAppLink';
import { waitForPageAssets } from './utils/utils';
import './App.css';

function App() {
  const [isDomLoading, setIsDomLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    waitForPageAssets().then(() => {
      if (isMounted) setIsDomLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {isDomLoading && <LoaderWidget />}
      <div className="Sana" aria-hidden={isDomLoading}>
      <Header />
      <Home />
      <Historia />
      <Tratamentos />
      <Atendimento />
      <Footer />
      <WhatsAppLink />
      </div>
    </>
  );
}

export default App;

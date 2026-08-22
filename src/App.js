import { useEffect, useState } from 'react';
import Atendimento from './pages/atendimento';
import Footer from './components/Footer';
import Header from './components/Header';
import Historia from './pages/historia';
import Home from './pages/home';
import Tratamentos from './pages/tratamentos';
import LoaderWidget from './components/LoaderWidget';
import WhatsAppLink from './components/WhatsAppLink';
import { isLoading, onDomContentLoaded } from './utils/utils';
import './App.css';

function App() {
  const [isDomLoading, setIsDomLoading] = useState(() => isLoading());

  useEffect(() => {
    if (!isDomLoading) return undefined;

    return onDomContentLoaded(() => setIsDomLoading(false));
  }, [isDomLoading]);

  if (isDomLoading) {
    return <LoaderWidget />;
  }

  return (
    <div className="Sana">
      <Header />
      <Home />
      <Historia />
      <Tratamentos />
      <Atendimento />
      <Footer />
      <WhatsAppLink />
    </div>
  );
}

export default App;

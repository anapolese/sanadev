import Header from './components/Header';
import Historia from './pages/historia';
import Home from './pages/home';
import WhatsAppLink from './components/WhatsAppLink';
import './App.css';

function App() {
  return (
    <div className="Sana">
      <Header />
      <Home />
      <Historia />
      <WhatsAppLink />
    </div>
  );
}

export default App;


import { Route } from 'react-router-dom';
import './App.css';
import Card from './Card';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="title">Recapp</div>
        <div>
          <a><Link to="/login">connexion</Link></a>
        </div>
      </header>

      <main className="main">
        <div className="left"><img className='burger' height="70px" src="/pizza2.jpg"/></div>
        <div className="center">

          <Card/>
          <Card/>
          <Card/>

        </div>
        <div className="right">
          <div className="top">
            <h2>10</h2>
            <p className='recette'>recettes</p>
          </div>
          <div className="bottom">
          <img className='pi' height="70px" src="/burger.png"/>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;

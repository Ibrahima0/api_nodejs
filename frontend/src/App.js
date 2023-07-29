
// import { Route } from 'react-router-dom';
import {useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [listRecettes,setListRecettes] = useState([]);
  const i=0;
  // const { id } = useParams();
  useEffect(()=>{
    const getRecettesList = async ()=>{
      try {
        const res = await axios.get('http://localhost:3001/api/v1/recettes');
        setListRecettes(res.data);
        console.log('render');
      } catch (err) {
        console.log(err);
      }
    }
    getRecettesList();
  },[]);
  return (
    <div className="app">
      <header className="header">
        <div className="title">Recapp</div>
        <div>
          <a><Link to="/login">connexion</Link></a>
        </div>
      </header>

      <main className="main">
        <div className='left-parent'>
          <div className="left1">
            <img className='burger' height="70px" src="/pizza2.jpg"/>
          </div>
          <div className="left2">
            <img className='burger' height="70px" src="/promo.jpg"/> 
          </div>
        </div>
        <div className="center">
            {
              (listRecettes.map((listRecette)=>(
                <Link className='toPage' to={`/page/${listRecette._id}`}><Card key={listRecette._id} nom={listRecette.nom} description={listRecette.description} /></Link>
              )))
            }
        </div>
        <div className="right">
          <div className="top">
            <h2 className='nb_recette'>{listRecettes.length}</h2>
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

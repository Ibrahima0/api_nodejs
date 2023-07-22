import React from "react";
import { useParams } from 'react-router-dom';
import {useEffect, useState } from 'react';
import axios from 'axios';
import '../Page.css';
import { Link } from 'react-router-dom';

const Page = ()=>{
    const { id } = useParams();
    const [recettes,setRecette] = useState([]);

    useEffect(()=>{
        const getRecette = async ()=>{
          try {
            const res = await axios.get(`http://localhost:3001/api/v1/recettes/${id}`);
            setRecette(res.data);
            console.log(res.data);
          } catch (err) {
            console.log(err);
          }
        }
        getRecette();
      },[]);
      console.log(recettes.nom);
    return(
        <>
            <main className="pages">
                <div className="left-page">
                    <img className="ime" src="/im1.jpg" alt="" />
                </div>
                <div className="right-page">
                    <a><Link to="/">retour</Link></a>
                    <h1>{recettes.nom} </h1>
                    <h2>description</h2>
                    <p>
                        {recettes.description}
                    </p>
                    <h2>ingredients</h2>
                    <p>
                        {recettes.ingrédients}
                    </p>
                    <h2>instructions</h2>
                    <p>
                        {recettes.instructions}
                    </p>
                    </div>
            </main>
        </>
    );
}

export default Page;
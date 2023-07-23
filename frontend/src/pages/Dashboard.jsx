import React from "react";
import { Link } from 'react-router-dom';
import '../dashboard.css';


import {useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ()=>{
    const [addEdit,setAddEdit] = useState(false);
    const [changeName,setChangeName] = useState('Ajouter');
    const [listRecettes,setListRecettes] = useState([]);
    const [nomText,setNomText] = useState('');
    const [descriptionText,setDescriptionText] = useState('');
    const [ingredientText,setIngredientText] = useState('');
    const [instructionText,setInstructionText] = useState('');
    const [isUpdating,setIsUpdating] = useState("");

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

      const addItem = async (e)=>{
        e.preventDefault();
        try {
          const data = {
              nom: nomText,
              description: descriptionText,
              ingrédients: ingredientText,
              instructions: instructionText
          };
          const res = await axios.post('http://localhost:3001/api/v1/recettes',data);
          setListRecettes((prev)=>[...prev,res.data]);
          console.log(listRecettes);
          setNomText('');
          setDescriptionText('');
          setIngredientText('');
          setInstructionText('');
        } catch (err) {
          console.log(err+" mauvais ");
        }
      }  
      const deleteItem = async (id) => {
        try {
            
          const res = await axios.delete(`http://localhost:3001/api/v1/recettes/${id}`);
          const newListRecette = listRecettes.filter((item)=>item._id !== id);
          setListRecettes(newListRecette);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }

      const updateItem = async (id,e) => {
        e.preventDefault();
        const data = {
            nom: nomText,
            description: descriptionText,
            ingrédients: ingredientText,
            instructions: instructionText
        };
        try {
          await axios.put(`http://localhost:3001/api/v1/recettes/${id}`,data)
          const updatedItemIndex = listRecettes.findIndex((item)=>item._id === isUpdating);
          listRecettes[updatedItemIndex].item = listRecettes;
          console.log(updatedItemIndex);
          window.location.reload();
          setListRecettes('');
        } catch (err) {
          console.log(err);
        }
      }
    const openClose = ()=>{
        setAddEdit(!addEdit);
        if(!addEdit){
            setChangeName("voir la liste");
        }else{
            setChangeName("Ajouter");
        }
    }
    return(
        <>
            <header className="header2">
            <h1>Dashboard</h1>
            <a><Link to="/">deconnexion</Link></a>
            </header>
            <main className="main2">
                <button className="add" onClick={openClose}>{changeName}</button>
                    {addEdit && (
                        <div>
                            <form  className="form2"  onSubmit={(e)=> addItem(e)}>
                                <h1>Ajouter</h1>
                                <div>
                                    <input type="text" placeholder="nom" onChange={(e)=> setNomText(e.target.value)} value={nomText}/>
                                </div>
                                <div>
                                    <input type="text" placeholder="description" onChange={(e)=> setDescriptionText(e.target.value)} value={descriptionText}/>
                                </div>
                                <div>
                                    <input type="text" placeholder="ingredients" onChange={(e)=> setIngredientText(e.target.value)} value={ingredientText}/>
                                </div>
                                <div>
                                    <input type="text" placeholder="instructions" onChange={(e)=> setInstructionText(e.target.value)} value={instructionText}/>
                                </div>
                                
                                <div>
                                    <button type="submit">Valider</button>
                                </div>
                            </form>
                        </div>
                    )
                    }
                    
                    {!addEdit &&(
                        <table>
                        <tr>
                            <th>nom</th>
                            <th>description</th>
                            <th>ingredients</th>
                            <th>instruction</th>
                        </tr>
                        {
                            
                            (listRecettes.map((listRecette)=>(
                                isUpdating === listRecette._id ? (
                                    
                                    // Le formulaire de mise à jour pour cette recette
                                    <tr key={listRecette._id}>
                                      <td>
                                        <input type="text" placeholder="nom" onChange={(e) => setNomText(e.target.value)} value={nomText} />
                                      </td>
                                      <td>
                                        <input type="text" placeholder="description" onChange={(e) => setDescriptionText(e.target.value)} value={descriptionText} />
                                      </td>
                                      <td>
                                        <input type="text" placeholder="ingredients" onChange={(e) => setIngredientText(e.target.value)} value={ingredientText} />
                                      </td>
                                      <td>
                                        <input type="text" placeholder="instructions" onChange={(e) => setInstructionText(e.target.value)} value={instructionText} />
                                      </td>
                                      <td>
                                        <button type="submit" onClick={(e)=> updateItem(listRecette._id,e)} className="modif">Modifier</button>
                                      </td>
                                    </tr>
                                  ) : (
                                    // L'affichage normal des données de la recette dans le tableau
                                    <tr key={listRecette._id}>
                                      <td>{listRecette.nom}</td>
                                      <td>{listRecette.description}</td>
                                      <td>{listRecette.ingrédients}</td>
                                      <td>{listRecette.instructions}</td>
                                      <td>
                                        <button className="edit" onClick={() => {
                                            setIsUpdating(listRecette._id);
                                            setNomText(listRecette.nom);
                                            setDescriptionText(listRecette.description);
                                            setIngredientText(listRecette.ingrédients);
                                            setInstructionText(listRecette.instructions);
                                        }}>
                                          modifier
                                        </button>
                                      </td>
                                      <td>
                                        <button className="delete" onClick={() => deleteItem(listRecette._id)}>
                                          supprimer
                                        </button>
                                      </td>
                                    </tr>
                                  )
                            )))
                        }
                        
                    </table>
                    )

                    }
                
                
            </main>
        </>
    );
}

export default Dashboard;
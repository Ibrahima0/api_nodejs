import React from "react";
import { Link } from 'react-router-dom';
import '../dashboard.css';
import Card from "../Card";
import { useState } from "react";

const Dashboard = ()=>{
    const [addEdit,setAddEdit] = useState(false);
    const [changeName,setChangeName] = useState('Ajouter')
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
                            <form className="form2" action="#">
                                <h1>Ajouter ou modifier</h1>
                                <div>
                                    <input type="text" placeholder="nom" />
                                </div>
                                <div>
                                    <input type="text" placeholder="description" />
                                </div>
                                <div>
                                    <input type="text" placeholder="ingredients" />
                                </div>
                                <div>
                                    <input type="text" placeholder="instructions" />
                                </div>
                                <div>
                                    <input type="file" placeholder="image" />
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
                        <tr>
                            <td>maafer</td>
                            <td>plat marron</td>
                            <td>tiguideguer</td>
                            <td>ce que vous voulezhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</td>
                            <td><button className="edit" onClick={openClose}>modifier</button></td>
                            <td><button className="delete">supprimer</button></td>
                        </tr>
                        <tr>
                            <td>maafer</td>
                            <td>plat marron</td>
                            <td>tiguideguer</td>
                            <td>ce que vous voulezhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</td>
                            <td><button className="edit" onClick={openClose}>modifier</button></td>
                            <td><button className="delete">supprimer</button></td>
                        </tr>
                        <tr>
                            <td>maafer</td>
                            <td>plat marron</td>
                            <td>tiguideguer</td>
                            <td>ce que vous voulezhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</td>
                            <td><button className="edit" onClick={openClose}>modifier</button></td>
                            <td><button className="delete">supprimer</button></td>
                        </tr>
                    </table>
                    )

                    }
                
                
            </main>
        </>
    );
}

export default Dashboard;
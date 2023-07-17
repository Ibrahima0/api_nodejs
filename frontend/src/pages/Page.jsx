import React from "react";
import '../Page.css';
import { Link } from 'react-router-dom';

const Page = ()=>{
    return(
        <>
            <main className="pages">
                <div className="left-page">
                    <img className="ime" src="/im1.jpg" alt="" />
                </div>
                <div className="right-page">
                    <a><Link to="/">retour</Link></a>
                    <h1>Titre </h1>
                    <h2>description</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil quod ea ratione impedit, vel iusto et quam molestiae ipsum? Officiis adipisci molestiae, asperiores quidem numquam minus nemo velit corrupti?
                        Reiciendis nisi, unde eius ipsum iure sapiente id excepturi odit ex cumque necessitatibus perspiciatis exercitationem consequatur, odio ab? Molestiae dignissimos perferendis quam molestias ipsum aliquid. Sequi totam iste ex possimus.
                    </p>
                    <h2>ingredients</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil quod ea ratione impedit, vel iusto et quam molestiae ipsum? Officiis adipisci molestiae, asperiores quidem numquam minus nemo velit corrupti?
                        Reiciendis nisi, unde eius ipsum iure sapiente id excepturi odit ex cumque necessitatibus perspiciatis exercitationem consequatur, odio ab? Molestiae dignissimos perferendis quam molestias ipsum aliquid. Sequi totam iste ex possimus.
                    </p>
                    </div>
            </main>
        </>
    );
}

export default Page;
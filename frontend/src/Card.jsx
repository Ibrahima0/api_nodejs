import React from "react";

const Card = ({nom,description})=>{
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <div><img height="30px" width="30px" src="/im1.jpg"/></div>
                    <div>...</div>
                </div>
                <div className="card-body">
                    <img src="/im1.jpg"/>
                    <h2 className="desc">{nom}</h2>
                    <div className="desc">{description}</div>
                </div>
                <div className="card-footer">
                    <div>
                        <img height="20px" src="fav.png"/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Card;
import React from "react";

const Card = ()=>{
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <div><img height="30px" width="30px" src="/im1.jpg"/></div>
                    <div>...</div>
                </div>
                <div className="card-body">
                    <img src="/im1.jpg"/>
                    <h2 className="desc">titre</h2>
                    <div className="desc">une breve description du site un petit truc</div>
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
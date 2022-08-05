import React from 'react';
import {NavLink} from "react-router-dom";

function Dish(props) {
    function f(stars) {
        let starsDom = [];
        let free = 0;
        while (stars>0){
            if (stars>=1){
                starsDom.push(
                    <i className = "fas fa-star" key={`star${free+1}`}></i>
                )
                stars--;
                free++;
            }else {
                starsDom.push(
                    <i className = "fas fa-star-half-alt" key={`star${free+1}`}></i>
                )
                stars--;
                free++;
            }
        }
        for (free; free < 5; free++){
            starsDom.push(
                <i className = "fa-regular fa-star" key={`star${free+1}`}></i>
            )
        }
        return starsDom
    }
    let dish = props.dish
    let loveDom = []
    function ifLove(loveData) {
        if(loveData.includes(parseInt(dish['idour_dishes']))){
            loveDom.push(
                <i
                    style={{
                        cursor: "pointer",
                        background:"#27ae60",
                        color: "white"
                    }}
                   className = "fas fa-heart"
                   onClick={ () => props.love(dish['idour_dishes'],"dishes")}
                   key = {`dish-love-${dish['idour_dishes']}`}></i>
            )
        }
        else {
            loveDom.push(
                <i
                    style={{
                        background:"white",
                        color: "#192a56",
                        cursor: "pointer"
                    }}
                   className = "fas fa-heart"
                   onClick={ () => props.love(dish['idour_dishes'],"dishes")}
                   key = {`dish-love-${dish['idour_dishes']}`}></i>
            )
        }
        return loveDom
    }

    return (
        <div className = "box"
             key = {`dish-${dish['idour_dishes']}`}>
            {ifLove(props.loveData)}
            <img src = {`/images/${dish['img']}`}
                 alt = "" key={`img-${dish["idour_dishes"]}`}/>
            <h3>{dish['name']}</h3>
            <div className = "stars">
                {f(dish['stars'])}
            </div>
            <span>{`$${dish['price']}`}</span>
            <NavLink to= "/"
                className = "btn">add to cart</NavLink>
        </div>    );
}

export default Dish;

import React from 'react';

export const Card=(props)=> {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.quantity} left in stock</p>
            <p>${props.price}</p>
            <button onClick={props.addItem}></button>
        </div>
    );
}

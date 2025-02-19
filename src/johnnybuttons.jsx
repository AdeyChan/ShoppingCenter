import React from 'react';

const Johnnybutton=(props)=> {
    return (
        <button onClick={props.general}>
        count is {props.count}
      </button>
    )
}

export default Johnnybutton;
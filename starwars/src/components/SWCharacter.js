import React from 'react';

const SWCharacter=(props)=>{
    return(
        <div>
        <h2 className='characters'>{props.character}</h2>
        <p>height: {props.height}</p>
        <p>eye color: {props.eyecolor}</p>
        <p>hair color:{props.haircolor}</p>
        <p>mass: {props.mass}</p>
        <p>birthyear: {props.birthyear}</p>
        <p>gender: {props.gender}</p>
        </div>
    );
}




export default SWCharacter;
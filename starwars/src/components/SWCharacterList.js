import React from 'react';
import SWCharacter from './SWCharacter'

const SWCharacterList =(props)=>{
    return(
        <div>
            {props.starwarsChars.map((list) =>{
                return(
                    <SWCharacter 
                    character={list.name}
                    height={list.height}
                    eyecolor={list.eye_color}
                    haircolor={list.hair_color}
                    birthyear={list.birth_year}
                    mass={list.mass}
                    gender={list.gender}
                    />
                );
            })}

        </div>
    );
};

export default SWCharacterList;
import React from 'react';

function Button(props){
    const { name, funcao} = props
    return(
        <button onClick={funcao}>{name}</button>
    )
};

export default Button;

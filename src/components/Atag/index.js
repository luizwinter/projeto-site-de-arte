import React from 'react';

function Atag(props){

    const {active, text, className} = props;

    return(

        <a className={className} href="#" onClick={active}>{text}</a>

    )
};

export default Atag;

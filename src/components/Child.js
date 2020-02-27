import React from 'react'


function Child (props){

    return(
        <h1> Hey, my name is {props.name}</h1>
    )
}

// Destructuring 1st way
// function Child ({name}){

//     return(
//         <h1> Hey, my name is {name}</h1>
//     )
// }

// Destructuring 2nsd way

// function Child (props){
//     const {name}=props
//     return(
//         <h1>Hey, my nama is {name}</h1>
//     )
// }

export default Child;

import React from 'react';

export default function App(){

    const arr = [10, 20, 30, 40];

    const newarr = arr.map(element => <li key = {element} >{element * 2}</li>);

    return(
    <>
    <ul>{newarr}</ul>
    </>);
}
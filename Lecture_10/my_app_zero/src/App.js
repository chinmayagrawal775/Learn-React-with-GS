import React from 'react';
import Image from './Image';
import image from './image.png';
import Error from './Error';

export default function App() {
  return (
    <React.Fragment>
        <Error>
            <React.StrictMode><Image pics = {image}/></React.StrictMode>
        </Error>
        <br/>
        <Error>
            <Image pics = "noimage"/>
        </Error>
    </React.Fragment>
  )
}

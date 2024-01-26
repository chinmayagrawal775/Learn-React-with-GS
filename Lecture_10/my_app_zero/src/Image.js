import React from 'react';

export default function Image(props) {

    if(props.pics === "noimage"){
        throw new Error("image not found");
    }

  return (
    <img src={props.pics} width = "300px" />
  )
}
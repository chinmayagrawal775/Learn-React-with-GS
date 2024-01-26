import React from 'react';
import hoc from './hoc.js';

function Logic1(props) {

  return (
    <React.Fragment>
		<h1>logic 1</h1>
		<h2>value:{props.value}</h2>
		<button onClick={props.handleLogic}>button</button>
	</React.Fragment>
  )
}

export default hoc(Logic1);
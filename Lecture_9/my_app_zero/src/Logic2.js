import React from 'react';
import hoc from './hoc.js';

function Logic2(props) {

  return (
    <React.Fragment>
		<h1>logic 2</h1>
		<h2>value:{props.value}</h2>
		<button onClick={props.handleLogic}>button</button>
	</React.Fragment>
  )
}

export default hoc(Logic2);
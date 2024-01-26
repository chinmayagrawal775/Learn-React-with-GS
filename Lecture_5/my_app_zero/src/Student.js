import React, { Component } from 'react'

class Student extends Component{

    state = {
        name: "rahul",
        id: 101
    }

    eventhandle = (id, e) => {
        console.log("hello", e);
    }

    //eventhandlearg = ;

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.eventhandle.bind(this, this.state.id)}>click me</button>
            </div>
        );
    }
}

// function Student(props){

//     function eventhandle(e) {
//         e.preventDefault();
//         console.log("button clicked" );    
//     }

//     return(
//         <div>
//             <h1>hello</h1>
//             <a href = "https://www.reactjs.org" onClick={eventhandle}>click me</a>
//         </div>
//     );
// }

export default Student;
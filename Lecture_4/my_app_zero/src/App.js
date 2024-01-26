import React from "react";
import Student from "./Student";

class App extends React.Component{
    render(){
        return(
            <Student>i am child</Student>
        );
    }
}

// const App = () =>{
//         return(
//             <div>
//                 <Student/>
//                 <Student/>
//                 <Student/>
//             </div>
//         );
//  }

export default App;
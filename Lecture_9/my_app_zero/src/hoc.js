import React, {useState} from 'react';

let hoc = Logic =>{
    function AioLogic(){

        const [logicValue, setLogicValue] = useState(0);

        let handleLogic = () =>{
            setLogicValue(logicValue + 1)
        }
        return(
            <Logic value = {logicValue} handleLogic = {handleLogic}/>
        )
    }
    return AioLogic;
}

export default hoc;
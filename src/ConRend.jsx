import React from "react";
function ConditionRend (){
    const isLoggedin="true";
    if(isLoggedin){
        return(
            <div>
                <h2>loginsuccessfull</h2>
            </div>
        )
    }else{
        return(
            <div>
                <h2>unsuccessful</h2>
            </div>
        )
    }
}
export default ConditionRend;
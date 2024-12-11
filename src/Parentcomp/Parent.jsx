import React from "react";
import User from "./User"
import Admin from "./Admin"
function Parent(props){
    
      return props.login ==="user"?<User/>:<Admin/>

    
}
export default Parent;
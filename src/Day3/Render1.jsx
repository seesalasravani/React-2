// import React from "react";
// import Render from "./Render";
// function Render(){
//     return(
//         <div>

//         </div>
//     )
// }
// export default Render;

import React from "react";
function CondRend() {
  const user = "admin";
  if (user === "admin") {
    return (
      <div>
        <h2>welcome admin</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>welcome user</h2>
      </div>
    );
  }
}
export default CondRend;

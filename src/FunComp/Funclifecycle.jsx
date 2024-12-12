import React, { useState } from "react";
export default function Funclifecycle(){
    const[text,setText] = useState(0);
    const handleEvent1=()=>{
        setText(text+1);
    }
    const handleEvent2=()=>{
        setText(text-1);
    }
    const handleEvent3=()=>{
        setText(text+2);
    }
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={handleEvent1}>+1</button>
            <button onClick={handleEvent2}>-1</button>
            <button onClick={handleEvent3}>+2</button>
            
        </div>
    )
}


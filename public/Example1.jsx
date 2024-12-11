import { Component } from "react";
import "./Example.css"

const products=[
    {
     productname:"mobile",
    productprice:"55000",
    productavilability:false,
    },
    {
    productname:"laptop",
    productprice:"50000",
    productavilability:true
    },
    {productname:"watch",productprice:"55000",productavilability:false},
];
    

class Example extends Component{
    render(){
        
        return(
            <>
            <div className="mainbox">
                <div classname={products[0].productavilability?"avilabile":"unavilable"}>
                    <h1>{products[0].productname}</h1>
                    <h1>{products[0].productprice}</h1>
                </div>
                <div classname={products[1].productavilability?"avilable":"unavilable"}>
                    <h1>{products[1].productname}</h1>
                    <h1>{products[1].productprice}</h1>
                </div>
                <div className={products[2].productavilability?"avilable":"unavilable"}>
                    <h1>{products[2].productname}</h1>
                    <h1>{products[2].productprice}</h1>

                </div>
                </div></>
        
             

          
        )
    }

}

export default Example;
import React,{Component} from "react";
import red from "./assets/image1.jpg";
import blue from "./assets/image3.jpeg";
import yellow from "./assets/image4.jpeg";
import pink from "./assets/image5.jpg";
class Main extends Component{
    render(){
        return(
            <div>
                <img src={red} alt="red"/>
                <img src={blue} alt="blue"/>
                <img src={yellow} alt="yellow"/>
                <img src={pink} alt="pink"/>
            </div>
        )
    }

}
export default Main;
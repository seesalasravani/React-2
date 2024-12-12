import React, { Component } from "react";
class Sampleform1 extends Component{
    constructor(){
        super();
        this.state={fname:"",output:"",sname:""};
    }
    handleChange=(event)=>{
        console.log(event.target.name)
        const value =event.target.value;
        this.setState({fname:value});

    };
    handlesubmit=(event)=>{
        event.preventDefault();
        this.setState({output:this.state.fname});
    };
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" name="fname" onchange={this.handleChange}></input>
                    <input type="text" name="sname" onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
                <h1>{this.state.output}</h1>
            </div>
        );
    }

}
export default Sampleform1;
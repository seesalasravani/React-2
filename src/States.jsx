import React,{Component} from "react"
class States extends Component{
    constructor(){
        super();
        this.state={counter:0}
    }
    handleEvent=()=>{
        this.setState({counter:this.state.counter+1})
    }
    handleEvent1=()=>{
        this.setState({counter:this.state.counter+2})
    }
    handleEvent2=()=>{
        this.setState({counter:this.state.counter+3})
    }
    handleEvent3=()=>{
        this.setState({counter:this.state.counter-1})
    }
    handleEvent4=()=>{
        this.setState({counter:this.state.counter-2})
    }

    render(){
        return(
            <div>
                {this.state.counter}
                <button onClick={this.handleEvent}>+1</button>
                <button onClick={this.handleEvent1}>+2</button>
                <button onClick={this.handleEvent2}>+3</button>
                <button onClick={this.handleEvent3}>-1</button>
                <button onClick={this.handleEvent4}>-2</button>
            </div>
        )
    }
}
export default States;
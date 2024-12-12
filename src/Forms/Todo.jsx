import React, { Component } from "react";
class Todo extends Component{
    constructor(){
        super();
        this.state={
            todo:"",
            list:[],
            inputvalue:"",
        }
    }
    handleChange=(event)=>{
        this.setstate({todo:event.target.value});
    
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setstate((a)=>{
            return{list:[...a.list,a.tool],todo:""};
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" id="todo" value={this.state.todo} onChange={this.handleChange}/>
                    <input type="submit"/>

                </form>
                <ul>
                    {this.state.list.map((a,b)=>{
                        console.log();
                        return(
                            <li key={b}>
                                {a}
                            <button>edit</button>
                            <button onClick={this.handleDelete}>delete</button>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Todo;
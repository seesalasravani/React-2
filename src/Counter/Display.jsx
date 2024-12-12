import React,{Purecomponent} from 'react'
export default class display extends Purecomponent{
    render(props){
        console.log("display-rendering")
        return(
            <div>
                {this.props.value}
            </div>
        )
    }
}
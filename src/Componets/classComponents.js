import React from "react";

class FirstClassComponent extends React.Component{
    constructor(){
        super()
        this.state={count:10,name:"hi",flag:true}
    }
    componentDidMount(){
        console.log("mounted");
        // alert("welcome to my page")
    }
    componentDidUpdate(){
        console.log("updated");
    }
    render(){
        var a="hello"
        // var count=10;
        return(
            <div>
                <h1>{this.state.name} This is my first Class Component : value is {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Inc</button>
                <button onClick={()=>{this.setState({flag:false})}}>Remove Second component</button>
                {this.state.flag && <SecondClassComponent hghgg={a}/>}
            </div>
        )
    }
}

class SecondClassComponent extends React.Component{
    componentWillUnmount(){
        console.log("unmounted");
        alert("component is getting deleted")
    }
    render(){
        return(
            <div>
                <h1>{this.props.hghgg} This is Second class component</h1>
            </div>
        )
    }
}

export default FirstClassComponent
import React, {Component} from 'react'

class Counter extends Component {
   constructor(props){
    super(props);
    this.state={
        number: 0
    }
   }

   increase = ()=>{
       const randomNumber=Math.floor(Math.random()*10)
       this.setState({number:this.state.number+randomNumber})
   }

   decrease = ()=>{
       const randomNumber=Math.floor(Math.random()*10)
       this.setState({number:this.state.number-randomNumber})
   }
   render(){
       return(
            <div className="App" style={{backgroundColor:"lightgrey"}}>
            <h3> Click buttons to increase and decrease the counter</h3>
            <p> {this.state.number}</p>
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>

            </div>
       );
   }
}

export default Counter;

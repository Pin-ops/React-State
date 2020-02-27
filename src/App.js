import React , {Component} from 'react';
import './App.css';
import Counter from './components/Counter';
import Child from './components/Child';


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title:"I learn React",
      topic:"React JS",
      city:"Düsseldorf",
      isDisplayed:true,
      color:"lightblue",
      name:"Pinar"
    }
    this.changeState=this.changeState.bind(this)
  }


  // if we write a traditional function, we have to bind this. For that; we write this.function-name=this.function-name.bind(this)

  changeState(){
    this.setState ({
      title:"I have learned HTML",
      topic:"Bootstrap"
    })
    }

  // if we write the function as arrow function, we don't need to use this.function-name=this.function-name.bind(this)
  reverseState = ()=>{
      this.setState({
      title:"I have already learned React",
      topic:"React JSX"
  })
  }

  displayCity = () =>{
    this.setState({
      // isDisplayed:false
      isDisplayed :!this.state.isDisplayed,

    })
  }


  changeBg = ()=>{
    const newColor = this.state.color === "lightblue" ? "lightgreen" : "lightblue";


    this.setState({
      color:newColor
    })

  }

  // changeName = (e)=>{
  //   this.setState({
  //     name:e.target.value
  //   })
  // }

  changeName = e => this.setState({name:e.target.value})

  render(){
    return(

      <div>
      <div className="App" style={{backgroundColor:this.state.color}}>
      <h2> {this.state.title} </h2>
      <p> {this.state.topic} </p>
      <button onClick = {this.changeState}>Change State</button>
      <button onClick = {this.reverseState}>Reverse State</button>

      { this.state.isDisplayed ? <p> {this.state.city} </p> : null }

      <button onClick= {this.displayCity}> Display City</button>
      <hr/>

      <button onClick={this.changeBg}>Change Background { this.state.color === "lightblue" ? "lightgreen" : "lightblue"} </button>

      </div>
      <Counter/>

      <div className="App" style={{backgroundColor:'lightgreen'}}>
      <input type="text" value={this.state.name} onChange={this.changeName} />
      <Child name={this.state.name}/>
      </div>
      </div>
    /* <input type="text" onChange={this.changeName} />this will take the value of input and write it in h1 */

    );
  }
}
export default App;









// function App() {
//   return (
//     <div>
//     Hello World</div>
//   );
// }

// export default App;

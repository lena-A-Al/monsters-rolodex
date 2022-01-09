import React,{Component} from 'react';
// import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';
import './App.css';



//class based component:
// class App extends Component {
//   constructor () {
//     super();
//     this.state = {
//       string: "Hello Lenda"
//     }
//   }
//   render() {
//       return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {this.state.string}
//         </p>
//         <button onClick= {() => this.setState({string:"I am learning react"})}>Change Text</button>
//       </header>
//     </div>
//   );
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       string:"hello Lena"
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//         <p>{this.state.string}</p>
//         <button onClick={()=>this.setState({string:"I am learning React this month."})}>Change the text</button>
//         </header>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       monsters:[
//       {name:'Frankenstein',
//       id:"asc1"},
//       {name:'Dracula',
//       id:"asc2"},
//       {name:'Zombie',
//       id:"asc3"}
//     ]
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         {
//           this.state.monsters.map(monster => <h1>key={monster.id} > {monster.name},</h1>)
//         }
//       </div>
//     )
//   }
// }

//how to fetch data from an API:
class App extends Component {
  //access to setstate:
  constructor(){
    super()
    this.state = {
      monsters:[],
      searchField:''
    
    }
  }
//life cycle method:
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={e =>{this.setState({searchField: e.target.value});
      }}/>

        <CardList monsters = {filterMonsters} />
      </div>
    )
  }
}
export default App;

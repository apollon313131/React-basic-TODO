import './App.css';
import React from 'react'
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';
import { Clock } from './components/Clock';

// const numbers = [1, 2, 3, 4, 5] // TODO Работа со списка через компонент LIST
// const numbers = [1, 2, 3, 4, 5]  // TODO Работа со списка №!
// const elements = numbers.map(item => <li>{item}</li>) // TODO Работа со списка №!

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }

  render() {
    return (
      <div className="App" >
        <Clock />
        {/* <ul> {elements} </ul> // TODO Работа со списка №! */}
        < ClickCounter /> {/* // TODO Работа со списка через компонент LIST*/}
        < List items={this.state.numbers} />
        <List items={this.state.numbers} />

      </div>
    );
  }
};

export default App;




// const InnerComponent = () => {
//   return <div>Name: Vladimir </div>
// };

// function Welcome(props) {
//   return (
//     <div>
//       <h1>Привет, {props.name}</h1>
//       {props.children}
//     </div>
//   )
// };


      // {/* {imgElement}*/}
      // {/* {element} */}
      // {/* <Welcome>
      //   <InnerComponent />
      // </Welcome> */}
import './App.css';
import React from 'react'
import { NameForm } from './components/NameForm/NameForm'
import { List } from './components/List';
import { SupportForm } from './components/SupportForm/SupportForm'
// import { Clock } from './components/Clock';
// import { ClickCounter } from './components/ClickCounter';
// const numbers = [1, 2, 3, 4, 5] // TODO Работа со списка через компонент LIST
// const numbers = [1, 2, 3, 4, 5]  // TODO Работа со списка №!
// const elements = numbers.map(item => <li>{item}</li>) // TODO Работа со списка №!
// document.documentElement.style.setProperty('--background', '#ccc')

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
        <header className='App-header'>
          {/* <NameForm /> */}
          {/* <Clock /> */}
          {/* <ul> {elements} </ul> // TODO Работа со списка №! */}
          {/* < ClickCounter /> // TODO Работа со списка через компонент LIST */}
          {/* < List items={this.state.numbers} /> */}
          {/* <List items={['1', '2']} /> */}
          {/* <List /> */}
          <SupportForm />
        </header>
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
import React from "react";
import "./App.css";
import PureComponent from './Components/PureComponent';
import RegularComponent from './Components/RegularComponent';
class App extends React.Component {
  state = {
    name: 'John',
    count: 0,
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              name: 'John', count: this.state.count + 1
            })
          }}
        >
          Update state
        </button>
        <p>{this.state.count}</p>
        <PureComponent name={this.state.name} />
        <RegularComponent name={this.state.name} />
      </div >
    );
  }
}

export default App;
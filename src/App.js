import React from 'react';
import "./App.css";
import HandleButton from './Components/HandleButton';
class App extends React.Component {
  state = {
    show: false
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}> Show Counter </button>
        {this.state.show && <HandleButton />}
      </div>
    );
  }
}

export default App;
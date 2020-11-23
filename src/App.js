import React from 'react';
import "./App.css";
class App extends React.Component {
  state = {
    background: '',
  };

  render() {
    return (
      <div className="App" style={{ background: this.state.background, height: "100vh", width: "100%" }}>
        <input onChange={(event) => this.setState({ background: event.target.value })} />
      </div>
    );
  }
}

export default App;
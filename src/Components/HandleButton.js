import React from "react";

class HandleButton extends React.Component {
    state = {
        counter: 0,
    };

    HandleDecrement = () => {
        if (this.state.counter < 1) {
            this.setState({
                counter: 0
            });
        } else {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }

    HandleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.HandleDecrement}>-</button> {this.state.counter} <button onClick={this.HandleIncrement}>+</button>
            </div >
        )
    }
}

export default HandleButton;
import React from 'react'
class PureComponent extends React.PureComponent {
    render() {
        console.log("pure component render");
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponent
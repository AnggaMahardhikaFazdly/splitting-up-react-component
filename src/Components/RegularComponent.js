import React from 'react'
class RegularComponent extends React.Component {
    heavyText() {
        for (let i = 0; i < 8000000; i++) {
            //
        }
        return "Heavy text";
    }
    render() {
        console.log("regular component render");
        return (
            <div>
                Regular Component {this.props.name} {this.heavyText()}
            </div>
        )
    }
}

export default RegularComponent
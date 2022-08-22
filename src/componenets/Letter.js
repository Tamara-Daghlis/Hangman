import { Component } from "react";
import './Letter.css'
export class Letter extends Component {

    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
    }

    render() {

        return (
            <span onClick={this.selectLetter}>{this.props.letter}</span>
        )
    }
}


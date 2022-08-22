import { Component } from "react";
import { Letter } from "./Letter"
import './Letter.css'
export class Letters extends Component {

    render() {
        let letterStatus = this.props.letterStatus
        let letters = Object.keys(letterStatus)
        return (
            <div>
                <div>Available Letters</div>
                {letters.map(letter =>
                (
                    this.props.letterStatus[letter] ? <span className="selected"><Letter letter={letter} selectLetter={this.props.selectLetter} letterStatus={this.props.letterStatus} /> </span> :
                        <Letter letter={letter} selectLetter={this.props.selectLetter} letterStatus={this.props.letterStatus} />
                ))}
            </div>
        )

    }
}


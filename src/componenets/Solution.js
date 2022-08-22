import { Component } from "react"
import { Letter } from "./Letter";

export class Solution extends Component {

    render() {
        let letters = this.props.solution.word.split('')
        return (
            <div>
                {letters.map((l) =>
                    this.props.letterStatus[l] ? <span><Letter letter={l} />&nbsp;</span> : <span><Letter letter="_" />&nbsp; </span>
                )}
                <div>
                    <em>{this.props.solution.hint}</em>
                </div>
            </div>
        )
    }
}



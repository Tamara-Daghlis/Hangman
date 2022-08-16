import { Component } from "react"

export class Solution extends Component {

    render() {
        let underScores = ["_", "_", "_", "_"];

        return (
            <div>
                {underScores.map((u) => (
                    <span>{u}&nbsp;</span>
                ))}

                <div>
                    <em>Your ideal mood when coding.</em>
                </div>
            </div>
        );
    }
}

export default Solution

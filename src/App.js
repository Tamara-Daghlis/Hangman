
import './App.css';
import { Solution } from './componenets/Solution';
import { Score } from './componenets/Score'
import { Letters } from './componenets/Letters';
import React, { Component } from "react";

class App extends Component {

  constructor() {
    super()

    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: 'LARGE', hint: 'very big' },
      score: 100,
    }
  }

  generateLetterStatuses() {
    const letters = {}
    for (let i = 65; i <= 90; i++) {
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }

  selectLetter = (letter) => {
    let status = this.state.letterStatus;
    status[letter] = true;
    this.setState({
      letterStatus: status,
    })
  }



  render = () => {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters
          letterStatus={this.state.letterStatus}
          selectLetter={this.selectLetter}
        />
      </div >
    )
  }
}

export default App





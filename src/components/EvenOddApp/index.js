// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, status: 'even'}

  onIncrement = () => {
    const {number} = this.state
    const {status} = this.state
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({number: randomNum})
    if (randomNum % 2 !== 0) {
      this.setState({status: 'odd'})
    } else {
      this.setState({status: 'even'})
    }
  }

  render() {
    const {number, status} = this.state

    return (
      <div className="container">
        <div className="bg">
          <h1 className="head">Count {number}</h1>
          <p className="para">Count is {status}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

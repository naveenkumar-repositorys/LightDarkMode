// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLogIn: true}

  implimentLightMode = () => {
    const {isLogIn} = this.state
    this.setState(prevState => {
      isLogIn = !prevState.isLogIn
    })
    console.log(isLogIn)
  }

  render() {
    const {isLogIn} = this.state
    let chooseMode

    if (isLogIn) {
      chooseMode = (
        <div className="darkCard-container">
          <h1 className="darkHeadingEl">Click To Change Mode</h1>
          <button className="lightMode-btn" onClick={this.implimentLightMode}>
            Light Mode
          </button>
        </div>
      )
    } else {
      chooseMode = (
        <div className="lightCard-container">
          <h1 className="lightHeadingEl">Click To Change Mode</h1>
          <button className="darkMode-btn">Dark Mode</button>
        </div>
      )
    }

    return <div className="bg-container">{chooseMode}</div>
  }
}

export default LightDarkMode

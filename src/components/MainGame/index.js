import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import ChoiceButton from '../ChoiceButton'
import OptionList from '../../OptionList'

import './index.css'

class MainGame extends Component {
  render() {
    return (
      <OptionList.Consumer>
        {value => {
          const {options, initialResult, playAgain} = value

          const {opponentImg, yourImg, resultHead, initialScore} = value

          const playAgainGame = () => {
            playAgain()
          }

          return (
            <div className="main-container">
              <div className="score-container">
                <div className="options-container">
                  <center>
                    <h1>
                      Rock
                      <br /> Paper
                      <br /> Scissors
                    </h1>
                  </center>
                </div>
                <div className="score-card">
                  <p>Score</p>
                  <p fontFamily="roboto">{initialScore}</p>
                </div>
              </div>
              {initialResult ? (
                <div className="r-c">
                  <div className="results-img-container">
                    <center>
                      <h1>YOU</h1>
                      <img
                        className="result-img"
                        src={yourImg}
                        alt="your choice"
                      />
                    </center>
                    <center>
                      <h1>OPPONENT</h1>
                      <img
                        className="result-img"
                        src={opponentImg}
                        alt="opponent choice"
                      />
                    </center>
                  </div>
                  <center>
                    <p>{resultHead}</p>
                    <button type="button" onClick={playAgainGame}>
                      Play Again
                    </button>
                  </center>
                </div>
              ) : (
                <center>
                  <div className="choice-container">
                    {options.map(i => (
                      <ChoiceButton details={i} key={i.id} />
                    ))}
                  </div>
                </center>
              )}
              <div className="popup-container">
                <Popup
                  trigger={
                    <button className="trigger-button" type="button">
                      RULES
                    </button>
                  }
                  modal
                >
                  {close => (
                    <div className="p-container">
                      <button
                        className="close-btn"
                        aria-label="close button"
                        onClick={() => close()}
                        type="button"
                      >
                        <RiCloseLine />
                      </button>
                      <img
                        className="rules-img"
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          )
        }}
      </OptionList.Consumer>
    )
  }
}

export default MainGame

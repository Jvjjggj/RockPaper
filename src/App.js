import './App.css'
import {Component} from 'react'
import MainGame from './components/MainGame'
// eslint-disable-next-line
import OptionList from './OptionList'
const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    buttonAlt: 'rock',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    buttonAlt: 'scissors',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    buttonAlt: 'paper',
  },
]

class App extends Component {
  state = {
    gameChoiceList: choicesList,
    initialScore: 0,
    yourImg: '',
    opponentImg: '',
    initialResult: false,
    draw: false,
    resultHead: '',
  }

  getRandom = async id => {
    const findById = item => {
      if (item.id === id) {
        return item
      }
      return null
    }

    const findOwn = choicesList.find(findById)

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const randomDetails = choicesList[randomIndex]

    await this.setState({
      initialResult: true,
      yourImg: findOwn.imageUrl,
      opponentImg: randomDetails.imageUrl,
    })

    if (findOwn.id === randomDetails.id) {
      await this.setState({draw: true, resultHead: 'IT IS DRAW'})
    }

    if (findOwn.id === 'ROCK' && randomDetails.id === 'SCISSORS') {
      await this.setState(prev => ({
        initialScore: prev.initialScore + 1,
        resultHead: 'YOU WON',
      }))
    }

    if (findOwn.id === 'SCISSORS' && randomDetails.id === 'PAPER') {
      await this.setState(prev => ({
        initialScore: prev.initialScore + 1,
        resultHead: 'YOU WON',
      }))
    }

    if (findOwn.id === 'PAPER' && randomDetails.id === 'ROCK') {
      await this.setState(prev => ({
        initialScore: prev.initialScore + 1,
        resultHead: 'YOU WON',
      }))
    }

    if (findOwn.id === 'SCISSORS' && randomDetails.id === 'ROCK') {
      await this.setState(prev => ({
        initialScore: prev.initialScore - 1,
        resultHead: 'YOU LOSE',
      }))
    }

    if (findOwn.id === 'PAPER' && randomDetails.id === 'SCISSORS') {
      await this.setState(prev => ({
        initialScore: prev.initialScore - 1,
        resultHead: 'YOU LOSE',
      }))
    }

    if (findOwn.id === 'ROCK' && randomDetails.id === 'PAPER') {
      await this.setState(prev => ({
        initialScore: prev.initialScore - 1,
        resultHead: 'YOU LOSE',
      }))
    }
  }

  playAgain = async () => {
    await this.setState({initialResult: false})
  }

  render() {
    const {gameChoiceList, initialScore, yourImg, opponentImg} = this.state
    const {initialResult, draw, resultHead} = this.state

    return (
      <OptionList.Provider
        value={{
          options: gameChoiceList,
          getRandom: this.getRandom,
          initialScore,
          yourImg,
          opponentImg,
          initialResult,
          draw,
          resultHead,
          playAgain: this.playAgain,
        }}
      >
        <MainGame />
      </OptionList.Provider>
    )
  }
}

export default App

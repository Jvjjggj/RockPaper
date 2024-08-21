import React from 'react'

const OptionList = React.createContext({
  options: [
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
  ],
  getRandom: () => {},
  initialScore: 0,
  yourImg: '',
  opponentImg: '',
  initialResult: false,
  draw: false,
  resultHead: '',
  playAgain: () => {},
})

export default OptionList

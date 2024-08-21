import './index.css'

import OptionList from '../../OptionList'

const ChoiceButton = ({details}) => (
  <OptionList.Consumer>
    {value => {
      const {getRandom} = value

      const sendId = () => {
        getRandom(details.id)
      }

      return (
        <button
          data-testid={`${details.buttonAlt}Button`}
          onClick={sendId}
          className="btn"
          type="button"
        >
          <img className="img" src={details.imageUrl} alt={details.id} />
        </button>
      )
    }}
  </OptionList.Consumer>
)

export default ChoiceButton

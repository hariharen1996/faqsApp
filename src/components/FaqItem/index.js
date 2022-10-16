// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {click: false}

  changeClick = () => {
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  render() {
    const {item} = this.props
    const {click} = this.state
    const {questionText, answerText} = item
    const imageBtn = click
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    return (
      <li className="card-item">
        <div className="items">
          <h1 className="card-text">{questionText}</h1>
          <button className="btn" type="button" onClick={this.changeClick}>
            <img
              src={imageBtn}
              alt={click ? 'minus' : 'plus'}
              className="btn-img"
            />
          </button>
        </div>
        {click && (
          <>
            <hr className="line" />
            <div className="answer-text">
              <p className="answer">{answerText}</p>
            </div>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem

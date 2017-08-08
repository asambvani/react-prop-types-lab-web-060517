// Code Product Component Here
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Color: {this.props.color}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: PropTypes.number.isRequired

}

// Order.propTypes = {
//   cone: PropTypes.bool,
//   size: PropTypes.string,
//   scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
//   orderInfo: PropTypes.shape({
//     customerName: PropTypes.string.isRequired,
//     orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
//   }).isRequired
// };

// Code Product Component Here
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  constructor(props){
    super(props)
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
  weight: validateWeight//PropTypes.number.isRequired

}

function validateWeight(props, propName, compnentName){
  if(!props.weight){
    return new Error("Must have weight")
  }
  if(typeof(props.weight)!= "number"){
    return new Error("Must be a number")
  }
  if(props.weight<80 || props.weight > 300){
    return new Error("Weight must be bewteen 80 and 300")
  }
  if(props.weight<80 || props.weight > 300){
    return new Error("Weight must be bewteen 80 and 300")
  }


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

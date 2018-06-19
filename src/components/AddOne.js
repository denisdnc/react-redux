import React from 'react'
import { connect } from "react-redux";

class AddOne extends React.Component {
  render() {
    return (
      <div>
        <span>Sum the number of the input:</span>
        <br />
        <button onClick={this.props.addOne}>Add One</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => {
      dispatch({
        type: "ADD_ONE"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOne);
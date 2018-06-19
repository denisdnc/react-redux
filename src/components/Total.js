import React from 'react'
import { connect } from "react-redux";

class Total extends React.Component {
  render() {
    return (
      <div>
        <span>Result: {this.props.total} </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Total);
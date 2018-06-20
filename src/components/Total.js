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

export default connect(mapStateToProps, null)(Total);
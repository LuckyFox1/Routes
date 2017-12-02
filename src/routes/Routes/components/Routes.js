import React from 'react'
import PropTypes from 'prop-types'

class Routes extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { increment } = this.props
    return (
      <div style={{ margin: '0 auto' }}>
        <h2>Counter: {this.props.Routes.counter}</h2>
        <button className='btn btn-primary' onClick={increment}>
          Increment
        </button>
      </div>
    )
  }
}

Routes.propTypes = {
  increment: PropTypes.func.isRequired,
  Routes: PropTypes.object.isRequired
}

export default Routes

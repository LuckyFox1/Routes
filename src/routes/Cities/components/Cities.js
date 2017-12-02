import React from 'react'
import PropTypes from 'prop-types'

class Cities extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { cities, increment } = this.props
    return (
      <div style={{ margin: '0 auto' }}>
        <h2>Counter: { cities.counter }</h2>
        <button className='btn btn-primary' onClick={increment}>
          Increment
        </button>
      </div>
    )
  }
}

Cities.propTypes = {
  increment: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired
}

export default Cities

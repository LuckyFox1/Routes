import { connect } from 'react-redux'
import { increment } from '../modules/cities'

import Cities from '../components/Cities'

const mapDispatchToProps = {
  increment: () => increment(10)
}

const mapStateToProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

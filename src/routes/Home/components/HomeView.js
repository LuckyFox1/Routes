import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <div className='wrapper-button'>
      <h1 className='title'>Optimal Route</h1>
      <Link to='/cities' className='cities-button'>Cities</Link>
      {' · '}
      <Link to='/routes' className='routes-button'>Routes</Link>
    </div>
  </div>
)

export default HomeView

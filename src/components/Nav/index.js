import React from 'react'
import './styles.scss'

export default function Nav() {
  return (
    <div className='site-head'>
      <p className='site-head__logo'>Splash</p>
      <nav>
        <ul>
          <li>
            <button>load new pictures</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

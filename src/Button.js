import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeContext'


export default function Button(props) {
  const {theme} = useContext(ThemeContext)


  const { children, onClick } = props
  return (
    <button onClick={onClick}
      style={{
        color: theme === 'dark' ? 'white' : 'black',
        background: theme === 'dark' ? 'black' : 'white',
      }}
    >{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

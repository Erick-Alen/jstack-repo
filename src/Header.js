import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { ThemeContext } from './ThemeContext'
import styles from './Header.scss'

console.log(styles)

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  const { title, children } = props
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired

}

Header.defaultProps = {
  title: `Test Blog`,
}

import styles from 'styled-components'

export const Nav = styles.nav`
    background: #000;
    margin-top:16px;
    padding: 16px;
    border-radius: 4px;
  a {
    color: #fff;
    text-decoration:none;
    display: inline-block;
    & + a {
      margin-left: 16px;
    }
  }
`

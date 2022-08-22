import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" width="80" />
      <h1>Pomodoro Timer</h1>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={30} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

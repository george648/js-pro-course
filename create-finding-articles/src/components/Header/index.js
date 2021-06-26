import './Header.scss';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './StyledHeader'

export function Header() {
  return (
    <StyledHeader color="green" className="header">
      <h3 >Articles Application</h3>
      <div>
        <NavLink className="articles" to="/articles-info">Home</NavLink>
        <NavLink className="about" to="/about">About</NavLink>
        <NavLink className="tags" to="/tags">tags</NavLink>
      </div>
    </StyledHeader>
  )
}
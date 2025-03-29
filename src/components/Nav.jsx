import { NavLink } from "react-router-dom"

export default function Nav({className}) {
  return (
    <nav>
        <ul className={`menu card-title ${className || ''}`}>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/reserve">Reservations</NavLink>
            </li>
            <li>
            <NavLink to="/order">Order Online</NavLink>
            </li>
        </ul>
    </nav>
  )
}

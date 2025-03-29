import logo from "../assets/logo.svg"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="navbar bg-base-200/80 shadow-sm fixed top-0 z-1">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div tabIndex="0" role="button" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </div>
            <Nav className="dropdown-content bg-base-300 shadow-sm rounded-box" />
          </div>
        </div>
        <div className="navbar-center">
          <img src={logo} alt="logo" className="md:mr-8"/>
          <Nav className="menu-horizontal hidden md:flex" />
        </div>
        <div className="navbar-end">
        </div>
    </header>
  )
}

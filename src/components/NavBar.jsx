import logo from '../img/abstrArt.png'
import './NavBar.css'

function NavBar(props) {

    return (
      <>
       <nav className="nav">
        <img src={logo} alt="logo" className='tamaño' />
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled">Disabled</a>
        {props.children}
        </nav>
      </>
    )
  }
  
  export default NavBar
import photo5 from '../../Assets/Images/Photo5.png'
import './Nav.css';

function Nav() {
  return (
    <header id="page-header">
        <img src={photo5} alt="Photo2"/>
        <h1 className="name">JEREMIAH WARREN</h1>
        <nav id="navbar">
            <ul className="flex-list">
                <li className="nav-item">
                    <a href="#about-section">About</a>

                </li>
                <li className="nav-item">
 
                    <a href="#project-section">Projects</a>
   <br/>
                </li>
                <li className="nav-item"> <br/>
                    <a href="#contact-section">Contact</a>
                    <br/>
                </li>
            </ul>
        </nav>
    </header>
    )}


    export default Nav;
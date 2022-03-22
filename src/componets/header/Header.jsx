import './header.css';
import Logo from '../img/logo.png';
function Header() {
   
        return ( 
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/#">
                          <img src={Logo} alt="Logo" id="logo" />
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarLinks" aria-controls="navBarLinks" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navBarLinks">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/#beginner">Inicio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#services">Serviços</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">Quem Somos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#about">Contato</a>
                    </li>
                
                  
                  </ul>
                 
                </div>
              </div>
            </nav>
      </header>
      )
       
    
}
export default Header;
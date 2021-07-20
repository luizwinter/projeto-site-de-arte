import { homePage, artistaPage, obrasPage } from '../ClickFunctions';
import './styles.css';
import Atag from '../Atag';

const NavBar = ()=>{
    return(
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Atag className="navbar-brand" text="Irene Borges" active={homePage}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Atag className="nav-link active" text="Home" active={homePage}/>
                    </li>
                    <li className="nav-item">
                    <Atag className="nav-link" text="Obras" active={obrasPage}/>
                    </li>
                    <li className="nav-item">
                    <Atag className="nav-link" text="Artista" active={artistaPage}/>
                    </li>
                </ul>
                <span className="navbar-text">
                    Texto aqui
                </span>
                </div>
            </div>
            </nav>
        </div>
    )
};

export default NavBar;
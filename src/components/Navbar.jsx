import React from "react";
import '../css/components/navbar.css';
import { FiPlus, FiMenu} from 'react-icons/fi';
import logoOff from '../images/logo.png';


const Navbar = () => {
  const fiPlusStyle={marginLeft: '50%', fontSize: '16px'}
  const logoStyle={width:'40px', height:'40px', position: 'relative',top:'13px', padding:'5px'}
  return (
        <nav>
          <div class="logo"><img src={logoOff} style={logoStyle}/>SimplLiyas</div>
          <label for="btn" class="icon">
            <span class="fa fa-bars"><FiMenu/></span>
          </label>
          <input type="checkbox" id="btn"/>
          <ul >
            <li>
              <label for="btn-1" class="show">Données de base +</label>
              <a href="#">Données de base</a>
              <input type="checkbox" id="btn-1"/>
              <ul >
                <li>
                  <a href="#">Db 1</a>
                </li>
                <li>
                  <a href="#">Db 2</a>
                </li>
                <li>
                  <a href="#">Db 3</a>
                </li>
              </ul>
            </li>
            <li >
            <label for="btn-2" class="show">Liasses fiscales +</label>
              <a href="#">Liasses fiscales</a>
              <input type="checkbox" id="btn-2"/>
              <ul>
                <li>
                  <a href="#">Lf 1</a>
                </li>
                <li>
                  <a href="#">Lf 2</a>
                </li>
                <li>
                <label for="btn-3" class="show">lf 3 +</label>
                  <a href="#">Lf 3
                     <span><FiPlus style={fiPlusStyle} /></span>
                  </a>
                  <input type="checkbox" id="btn-3"/>
                  <ul>
                    <li>
                      <a href="#">lf3/1</a>
                    </li>
                    <li>
                      <a href="#">lf3/2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
            <label for="btn-4" class="show">Etat de synthèse +</label>
              <a href="#">Etat de synthèse</a>
              <input type="checkbox" id="btn-4"/>
              <ul>
                <li>
                  <a href="#">Es 1</a>
                </li>
                <li>
                  <a href="#">Es 2</a>
                </li>
                <li>
                  <a href="#">Es 3</a>
                </li>
              </ul>
            </li>
            <li >
            <label for="btn-5" class="show">Diverses déclarations +</label>
              <a href="#">Diverses déclarations</a>
              <input type="checkbox" id="btn-5"/>
              <ul>
                <li>
                  <a href="#">Dd 1</a>
                </li>
                <li>
                  <a href="#">Dd 2</a>
                </li>
                <li>
                  <a href="#">Dd 3</a>
                </li>
              </ul>
            </li>
            <li>
            <label for="btn-6" class="show">TVA +</label>
              <a href="#">TVA</a>
              <input type="checkbox" id="btn-6"/>
              <ul >
                <li>
                  <a href="#">Tva 1</a>
                </li>
                <li >
                  <a href="#">Tva 2</a>
                </li>
                <li>
                  <a href="#">Tva 3</a>
                </li>
              </ul>
            </li>
            <li>
            <label for="btn-7" class="show">Traitement et salaires +</label>
              <a href="#">Traitement et salaires</a>
              <input type="checkbox" id="btn-7"/>
              <ul>
                <li>
                  <a href="#">Ts 1</a>
                </li>
                <li>
                  <a href="#">Ts 2</a>
                </li>
                <li>
                  <a href="#">Ts 3</a>
                </li>
              </ul>
            </li>
            <li>
            <label for="btn-8" class="show">Outils +</label>
              <a href="#">Outils</a>
              <input type="checkbox" id="btn-8"/>
              <ul>
                <li>
                  <a href="#">Ot 1</a>
                </li>
                <li>
                  <a href="#">Ot 2</a>
                </li>
                <li>
                  <a href="#">Ot 3</a>
                </li>
              </ul>
            </li>
            <li>
            <label for="btn-9" class="show">Paramétrages +</label>
              <a href="#">Paramétrages</a>
              <input type="checkbox" id="btn-9"/>
              <ul>
                <li>
                  <a href="#">Pr 1</a>
                </li>
                <li>
                  <a href="#">Pr 2</a>
                </li>
                <li >
                  <a href="#">Pr 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
  );    
};    
    
export default Navbar;
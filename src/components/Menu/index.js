import './menu.css';
import { BsYoutube, BsInstagram} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
  return (
    <div className="menu">
      <a className="social" href="https://www.linkedin.com/in/jhonatan-souz/">
        <BsYoutube color="#fff" size={24} />
      </a>
      <a className="social" href="https://www.linkedin.com/in/jhonatan-souz/">
        <BsInstagram color="#fff" size={24} />
      </a>
      <Link className="menu-item" to="/links">
      Meus Anões 
      </Link>

    </div>
  )
}
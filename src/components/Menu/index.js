import './menu.css'
import { BsFacebook, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a  className="social" href="https://www.facebook.com/julio.macedo.79/">
                <BsFacebook color="#fff" size={24} />
            </a>
            <a  className="social" href="https://www.instagram.com/juliocesarmacedo89/">
                <BsInstagram color="#fff" size={24} />
            </a>
            <Link className="menu-item" href=""to="/links">
                Meus Links
            </Link>

        </div>
    )
}
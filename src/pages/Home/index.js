import { useState} from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'
import { saveLink} from '../../services/storeLinks'

export default function Home(){
    const [link, setLink] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})

    async function handleShortLink() {
      try{ //tente executar
        const response = await api.post('/shorten', { //response espera receber da api ...
          long_url: link
        })
        
        setData(response.data)
        setShowModal(true)

        saveLink('@encurtaLink', response.data) //(key, newLink) -> argumento, conforme a função 

        setLink('')

      } catch{ // se der errado ...
        alert("Ops ... algo deu errado! 😫")
        setLink('') //para voltar o valor em branco no input
      }
      
      
    }

    return(
      
      <div className="container-home">

        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h1>Encurtador de links</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF" />
            <input 
            type="text" 
            placeholder="Cole seu link aqui ..." 
            value={link}
            onChange= { (e) => setLink(e.target.value)}
            />
          </div>
          <button onClick={handleShortLink}>Encurtar Link</button>
        </div>
        
        <Menu/>
        {
          showModal && (
            <LinkItem 
              closeModal ={() => setShowModal(false)}
              content= {data}
            />
          )
        }
      </div>

    )
  }
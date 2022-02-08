import { useState, useEffect } from 'react'

import './links.css'
import { FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom' //para fazer link entre as pág

import { getLinksSave, deleteLink} from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links(){

    const [myLinks, setMyLinks] = useState([])

    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    const [emptyList, setEmptyList] = useState(false)

    useEffect(() => { //useEffect(() => {}, [])
      async function getLinks(){
        const result = await getLinksSave('@encurtaLink') // que te passar a mesma chave 

        if(result.length === 0){
          setEmptyList(true)
        }
        setMyLinks(result) //todos os links salvos no local storage
      }

      getLinks()
    }, [])

    function handleOpenLink(link){
      setData(link)
      setShowModal(true)
    }

    async function handleDelete(id){
      const result = await deleteLink(myLinks, id)

      if(result.length ===0){
        setEmptyList(true)
      }
      setMyLinks(result)
    }


    return(
      <div className="links-container">

        <div className="links-header">
          <Link to="/">
            <FiArrowLeft size={38} color="#fff" />
          </Link>
          <h1>Meus Links</h1>
        </div>

        {emptyList && (
          <div className="links-item">
            <h2 className="empty-text"> Sua lista está vazia ...</h2>
          </div>
        )}

        <div className="wrapper">
        {
            myLinks.map(link => (
              //precisa ter um identificador (key)
              
              <div  key={link.id} className="links-item">  
                <button className="link" onClick={() => handleOpenLink(link)}>
                  <FiLink size={18} color="#fff" />
                  {link.long_url}
                </button>
                <button className="linkDelete" onClick={() => handleDelete(link.id)}>
                <FiTrash size={24} color="#FF5454" />
                </button>
              </div>
              
          ))
        }
        </div>
        
        {showModal && (
          <LinkItem // tem dois argumentos (closeModal, content)
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}

      </div>
    )
}
import './links.css';
import { useState, useEffect } from 'react';

import { FiArrowLeft, FiTrash } from 'react-icons/fi';
import { GiShinyApple } from "react-icons/gi";
import { Link } from 'react-router-dom';
import LinkItem from "../../components/LinkItem";

import { getLinksSave, deleteLink} from '../../Services/storeLinks'

export default function Links() {

  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false)
  const [empytList, setEmpytList] = useState(false)

  useEffect(() => {
      async function getLinks() {
          const result = await getLinksSave('@encurtaLink');
          if (result.length === 0) {
              setEmpytList(true)
          }

          setMyLinks(result);
      }
      getLinks();

  }, [])

  function handleOpenLink(link) {
      setData(link);
      setShowModal(true);
  }

  async function handleDelete(id){
      const result = await deleteLink(myLinks, id);

      if(result.length === 0){
          setEmpytList(true);
      }

      setMyLinks(result);
  }

  return (
      <div className="links-container">

          <div className='links-header'>
              <Link to="/">
                  <FiArrowLeft size={38} color='#fff' />
              </Link>
              <h1>Meus Links</h1>
          </div>

          {empytList && (
              <div className='links-item'>
                  <h2 className='empty-text'>Sua lista está Vazia...</h2>
              </div>
          )}

          {myLinks.map(link => (
              <div key={link.id} className='links-item'>
                  <button className='link' onClick={() => handleOpenLink(link)}>
                      <GiShinyApple size={18} color='#fff' />
                      {link.long_url}
                  </button>
                  <button className='link-delete' onClick={() => handleDelete(link.id)}>
                      <FiTrash size={24} color='#FF5454' />
                  </button>
              </div>
          ))}

          {showModal && (
              <LinkItem
                  closeModal={() => setShowModal(false)}
                  content={data}
              />
          )}
      </div>
  );
}

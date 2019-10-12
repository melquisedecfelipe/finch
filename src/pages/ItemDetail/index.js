import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Header from '../../components/Header';

import Return from '../../assets/return@2x.png';

export default function ItemDetail(props) {
  const [item, setItem] = useState([]);
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  const id = parseInt(props.match.params.id);

  useEffect(() => {
    async function loadItem() {
      localStorageItems.forEach(element => {
        if (element.id === id) {
          setItem(element);
        }
      });
    }
    loadItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="item">
      <Header />
      <div className="item-container">
        <div className="item-header">
          <div>
            <div className="item-content">
              <h1>{item.nome}</h1>
              <span>{parseInt(item.valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
              <div className="item-check">
                <label>
                  <input type="checkbox"/>
                  <span></span>
                </label>
                <p for="">tornar favorito</p>
              </div>
            </div>
            <p>{item.decricaoCurta}</p>
          </div>
          <div className="item-search">
            <Link to="/"><img className="item-return" src={Return} alt="Voltar"/></Link>
          </div>
        </div>
        <div className="item-detail">
          <div className="item-img" style={{backgroundImage: `url(${item.imagem})`}}>
            <p className={item.exclusivo === true ? "-blue" : ""  || item.promocao === true ? "-red" : ""}>
              { item.exclusivo === true ? "Exclusivo" : ""  || item.promocao === true ? "Promoção" : ""}
            </p>
          </div>
          <div className="item-info">
            <h1>Detalhes do Produto</h1>
            <p>{item.descricaoLonga}</p>
          </div>
        </div>
        <div className="item-datasheet">
          <h1>Ficha Técnica</h1>
          <div>
            <ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
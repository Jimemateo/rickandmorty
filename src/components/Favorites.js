import React from "react";
import {connect, useDispatch} from 'react-redux';
import Card from "./Card";
import styles from './favorite.module.css'
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);    
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

    return (
      <div className={styles.favoritesStyles}>
      

        <select onChange={handleOrder}className={styles.orderFilter}>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
        </select>

        <select onChange={handleFilter} className={styles.filter}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
          <option value='allCharacters'>All Characters</option>
        </select>

        {myFavorites.map((character) => (
          <div className={styles.favoriteCardItem}> 
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
            origin={character.origin}
            id={character.id}
          />
          </div>
        ))}
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    myFavorites: state.myFavorites,
  });
  
  export default connect(mapStateToProps)(Favorites);
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css'

const Detail = () => {
    const {id} = useParams();
    const  [character, setCharacter] = useState({});

    
    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (
    <div> 
      {character.name && (
        <div className={styles.detailStyle}> 
          {character.name && <h2>Name:  {character.name} </h2>}
          {character.image && (
            <img src={character.image}  alt = {character.name} className={styles.roundImage} />
          )}
        </div>

      )}
    </div>
   )


}

export default Detail;
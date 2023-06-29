import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const  [character, setCharacter] = useState({});

    
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
        <div> 
          {character.name && <h1>Name:{character.name} </h1>}
          {character.image && (
            <img src={character.image} alt = {character.name}/>
          )}
        </div>

      )}
    </div>
   )


}

export default Detail;
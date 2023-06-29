import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

function Card({ name, species, gender, onClose, image, status, origin, id, myFavorites, removeFav, addFav }) {
   const [isFav, setIsFav] = useState (false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
  
   const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        removeFav(id);
      } else {
        setIsFav(true);
        addFav({
          name,
          species,
          gender,
          image,
          status,
          origin,
          id
        });
      }
    };

   const handleCardClose = () => {
      onClose(id);   
   }

   return (
      <section className= {styles.character} >
         <div className={styles.characterHeader}>
            <div className={styles.status}>
         <h4>{status}</h4>
            </div>
         </div>

         <div  >
           <figure className={styles.personajeBodyFigureImg}>
               <img src={image} alt={name} /> 
           </figure>
 
          <Link to = {`/detail/${id}`} >
         <h2 className={styles.characterName}>{name} </h2>
          </Link>  

         <p className={styles.speciesAndGender}>
             {species} <span>-</span> {gender} 
         </p>

         <p className={styles.origin}>
            {origin}
         </p>

         <p>
         <button onClick={()=>onClose(id)} className={styles.styleButton}>Close</button>
         </p>         
         </div>
         <div>
         {
           isFav ? (
              <button onClick={handleFavorite} className={styles.styleFavoriteButton}>❤️</button>
           ) : (
              <button onClick={handleFavorite}className={styles.styleFavoriteButton}>🤍</button>
           )
        }
         </div>
         </section>
 
   );
};

    const mapStateToProps = (state) => ({
       myFavorites: state.myFavorites
     });

    const mapDispatchToProps = {
       addFav,
       removeFav
     };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);


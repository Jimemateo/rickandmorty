import Card from './Card';
import styles from './card.module.css';

const Cards = ({ characters, onClose}) => {
  console.log("IDs de personajes:", characters.map((character) => character.id));

  
  return (
    <div className ={styles.styleContainer}>
      {characters.map(({id, name, status, species, gender, origin, image}) => {
     
        return <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          onClose={() => onClose(id)}
        />
      })
    }
    </div>
  );
};

export default Cards;

import styles from './searchBar.module.css' ;
import { useState } from 'react';

function SearchBar({onSearch}) {
   const [id,setId] = useState ("");

   const handleChange = (event) => {
      setId (event.target.value);
   }

   return (   
      <div
         style={{
         display: 'flex',
         margin:10,
         marginTop:-45,
         width: '100%',
         justifyContent: 'end',
         fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
         marginRight: 125,
      }}
      >
      <input className={styles.input} 
          type='search'
          placeholder='Search a character by ID here'
          onChange={handleChange}
          value={id}
          
         />
      <button className = {styles.buttom}
          onClick={()=>{onSearch(id); setId ('')}}
          >Add Character</button> 
      </div>
   );
}

export default SearchBar; 
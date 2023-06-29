import React from 'react';
import SearchBar from './SearchBar';
import { Link} from 'react-router-dom';
import styles from './card.module.css';

const Nav = ({onSearch}) => {
  return (
    <div 
    style={{
      display: 'flex',
      margin:20,
      width: '100%',
      justifyContent: 'end',
      marginRight: 100,
   }}>
      <button className = {styles.aboutButton}>
      <Link to= '/about' style={{color: '#151515'}}>About</Link>
      </button>

      <button className = {styles.favoriteButton}>
        <Link to = '/favorites' style={{color: '#151515'}}>Favorites</Link>
      </button>

      <button className = {styles.homeButton}>
        <Link to = '/home' style={{color: '#151515'}}>Home</Link>
      </button>

      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
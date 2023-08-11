import './App.css';
import Logo from './img/logo.png';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import styles from './components/card.module.css'
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Rick from './img/rick bailando.gif';
import Morty from './img/morty.jpg';
import Form from './components/Form';
import Favorites from './components/Favorites';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
         
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
 

   const onSearch = async (id) => {
      try {
         const repeated = characters.find((item) => item.id === Number (id))
         if (repeated) return alert ('That character was already add!')

         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
                      
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               }                
            } catch (error) {
            alert('There´s nothing here. Searching is pain, you better go back and try again');
            //alert('That character is not in this universe. Maybe search again?')
      }
   }

      const onClose = (id) => {
         const charactersFiltered = characters.filter(character => 
            character.id !== Number(id))
            setCharacters(charactersFiltered);
         };

      
   return (
      <div className='App'>
         <figure className='logo'>
            <img className={styles.logo} src={Logo} alt='Rick and Morty'/>
         </figure>
         <figure className='Rick'>
            <img className={styles.rickImgStyle} src={Rick} alt='Rick'/>
         </figure>
         <figure className='Morty'>
            <img className={styles.mortyImgStyle} src={Morty} alt='Morty'/>
         </figure>
         
         {
         location.pathname !== '/'
         ? <Nav onSearch={onSearch} />
         :null
         }
       
         <Routes>
            <Route path='/' element = {<Form login={login}/>}/>
            <Route path='/home' element= {<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/favorites" element={<Favorites />} /> 
            <Route path='/about' element= {<About/>} />
            <Route path='/detail/:id' element= {<Detail/>} />
         </Routes>
        
      </div>
   );
}

export default App;


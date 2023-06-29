import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions.types'

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}


const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            }
        
        case REMOVE_FAV: 
        const updatedFavorites = state.myFavorites.filter(
            (character) => character.id !== action.payload
          );
          return {
            ...state,
            myFavorites: updatedFavorites
          };    
        
        case FILTER: 
        const allCharactersFiltered = state.allCharactersFav.filter(character =>
             character.gender === action.payload)
           return {
            ...state,
            myFavorites:
            action.payload === 'allCharacters'
            ? [...state.allCharactersFav]
            : allCharactersFiltered             
        }   
        
        case ORDER: 
        const allCharactersFavCopy = [...state.allCharactersFav]
           return {
            ...state,
            myFavorites: 
              action.payload === 'A'
              ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
              : allCharactersFavCopy.sort((a,b) => b.id - a.id)
        }

        default: 
        return {...state};
    }

};
  
export default reducer;


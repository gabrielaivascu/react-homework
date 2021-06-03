import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CocktailsComponent = (props) => {
  
  const [cocktailsState, setCocktailsState] = useState({ cocktails: [], isLoaded: false, isBack: true });

  const [formState, setForm] = useState({cocktailName: ''});

  const  handleChangeData = e => {
    setForm({...formState, [e.target.name]: e.target.value });
  }
  const submitForm = () => {
    console.log(formState);
  }

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then(result => result.json())
      .then(res => setCocktailsState({isLoaded: true, cocktails: res.drinks}))
  }, []) 


    const listOfCocktails = cocktailsState.cocktails.map(cocktail => 
    <div className="block" key={cocktail.idDrink}>
      <Link to={`${props.match.url}/details/${cocktail.idDrink}`}>
        <img src={cocktail.strDrinkThumb} />
        <h4>{cocktail.strDrink}</h4>
      </Link>
    </div>
    );
  
    return(
      <div className="cocktails-page">
        <div className="form-container">
          <form>
              <label>Cocktail name</label>
              <input className="input-container" type="text" name="cocktailName" value={formState.cocktailName} onChange={handleChangeData}></input>
          </form>
          <button onClick={submitForm}>Submit</button>
        </div>
    
        <div className="container-column">
          <h2>Non_Alcoholic cocktails</h2>
          <div className="category-blocks-list">
            {cocktailsState.isLoaded && listOfCocktails}
          </div>
        </div>
      </div>
    );
}

export default CocktailsComponent;

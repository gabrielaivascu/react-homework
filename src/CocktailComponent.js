import React from 'react';
import {useEffect, useState} from 'react';

const CocktailComponent = (match) => {
  const [drinkState, setDrinks] = useState();

  const goBack = () => {
      match.history.push('/cocktails');
  }

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + match.match.params.id)
      .then(result => result.json())
      .then(res => { 
        setDrinks(res.drinks[0])
        console.log(res);
      })
  }, [setDrinks]) 

  return (
    <div>
      {
        drinkState !== undefined && <div className="cocktail-container">
        <h2>{drinkState.strDrink}</h2>
        <img src={drinkState.strDrinkThumb} />
        <button onClick={goBack}>Back</button>
      </div>
    }
    </div>
  )
}

export default CocktailComponent;

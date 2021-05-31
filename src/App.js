import './App.css';
import CocktailsComponent from './CocktailsComponent';
import CocktailComponent from './CocktailComponent';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <ul>
      <li><Link to="/cocktails">Cocktails</Link></li>
    </ul>
    <Switch> 
      <Route path={`/cocktails/details/:id`} component={CocktailComponent}></Route>
      <Route path="/cocktails" component={CocktailsComponent} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;

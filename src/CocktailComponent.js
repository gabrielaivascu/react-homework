import React from 'react';

class CocktailComponent extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  goBack = () => {
    this.props.changeStatus(true);
  }

  getDetails = () => {
    this.props.getDetails(this.props.data);
  }

  render() {
    return (
      <div className="cocktail-container">
        <h2 onClick={()=>this.getDetails()}>{this.props.data.title}</h2>
        <p>{this.props.data.imgSrc}</p>
        <button onClick={()=>this.goBack()}>Back</button>
      </div>
    )
  }
}

export default CocktailComponent;

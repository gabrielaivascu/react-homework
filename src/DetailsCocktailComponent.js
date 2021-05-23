import React from 'react';

class DetailsCocktailComponent extends React.Component {
  handleClick = () => {
    this.props.hideDetails();
  }

  render() {
    return (
      <div className="container details">
        <div className="container-column">
          <button onClick={()=>this.handleClick()}>Hide details</button>
          <p>{this.props.data.imgSrc}</p>
        </div>
        <div className="container-column">
        <h3>Title: {this.props.data.title}</h3>
        <p>ID: {this.props.data.id}</p>
        </div>
      </div>
    )
  }
}

export default DetailsCocktailComponent;

import React from 'react';
import DetailsCocktailComponent from './DetailsCocktailComponent';
import CocktailComponent from './CocktailComponent';

class CocktailsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      cocktails: [
        {name: 'Alcoholic'},
        {name: 'Non alcoholic'},
        {name: 'Ordinary Drink'},
        {name: 'Cocktail glass'},
        {name: 'Champagne flute'}
      ],
      categories: [
        {
          title: 'Category block 1',
          id: '100',
          imgSrc: 'dummyImgSrc1'
        },
        {
          title: 'Category block 2',
          id: '200',
          imgSrc: 'dummyImgSrc2'
        },
        {
          title: 'Category block 3',
          id: '300',
          imgSrc: 'dummyImgSrc3'
        },
        {
          title: 'Category block 4',
          id: '400',
          imgSrc: 'dummyImgSrc4'
        }
      ],
      isBack: true,
      selectedBlock: '',
      detailsActive: false,
      detailsData: ''
    };
  }

  handleClick = (value) => {
    this.setState({isBack: false});
    this.setState({selectedBlock: value});
  }

  render() {
    const handleChangeStatus = (status) => {
      this.setState({isBack: status})
    }
    const handleGetDetails = (value) => {
      this.setState({detailsActive: true})
      this.setState({isBack: true})
      this.setState({detailsData: value})
    }
    const handleHideDetails = () => {
      this.setState({detailsActive: false})
    }

    // const listOfCocktails = this.state.cocktails.map(c => <li key={c.name}>{c.name}</li>);
    const listOfCategories = this.state.categories.map(category => 
    <div className="block" onClick={() => this.handleClick(category)} key={category.id}>
      <p>{category.imgSrc}</p>
      <h4>{category.title}</h4>
    </div>
    );
    return (
      <div className="cocktails-page">
        {/* <ul className="nav-list">{listOfCocktails}</ul> */}

        {this.state.detailsActive && 
        <DetailsCocktailComponent data={this.state.detailsData} hideDetails={handleHideDetails}/>}

        {this.state.isBack === true &&
        <div className="container-column">
          <h2>Category 1</h2>
          <div className="category-blocks-list">
            {listOfCategories}
          </div>
        </div>
        }

        {this.state.isBack === false &&
        <CocktailComponent data={this.state.selectedBlock} changeStatus={handleChangeStatus} getDetails={handleGetDetails} />}
      </div>
    )
  }
}

export default CocktailsComponent;

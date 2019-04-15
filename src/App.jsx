import React, { Component } from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import Form from './components/Form';

class App extends Component {
  state = {
    currentPage: 'productList',
  }

  changeView = (nextView) => {
    this.setState({
      currentPage: nextView
    });
  }

  render() {
    const views = {
      'form': <Form />,
      'productList': <ProductList switchView={this.changeView} />
    };

    const currentView = views[this.state.currentPage];
    return (
      <div className="App">
        {currentView}
      </div>
    );
  }
}

export default App;

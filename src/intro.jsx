import React, { Component } from 'react';
import Header from './components/Header';

class Root extends Component {
  state = {
    title: 'Header Title',
    currentPage: 'Landing Page'
  }

  changeTitle = () => {
    this.setState({
      title: 'New Header Title'
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <button onClick={this.changeTitle}>Change Title</button>
        <section>
          {this.state.currentPage}
        </section>
        <footer>
          Footer
          Header
          Header
          Header
          Header
          Header
          Header
        </footer>
      </div>
    )
  }
}

export default Root;
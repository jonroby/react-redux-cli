import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/user-actions.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="App">
        React CLI
        <button onClick={this.fetchData} />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);

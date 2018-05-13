import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './user-actions.js';

class User extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.fetchUser()
  }

  render() {
    return (
        <div>
        React CLI
        <button onClick={this.fetchData} />
        </div>
    );
  }
}

export default connect(null, { fetchUser })(User);

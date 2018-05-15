import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchUser,
} from './test-comp-actions';

// import './test-comp-styles.js';

class testComp extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
          Click here
          <button onClick={() => this.props.fetchUser()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {
  fetchUser,
})(testComp);

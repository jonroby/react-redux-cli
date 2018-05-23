const { toCapitalized } = require('../helpers/convertVariables');

const connectedComponentFileString = (d, fp) => {
  return (`import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../redux/actions';

class ${toCapitalized(d.filename)} extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>Connected Component</div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(${toCapitalized(d.filename)});`);
};

module.exports = connectedComponentFileString;

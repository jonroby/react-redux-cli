const { toCapitalized } = require('../helpers/convertVariables');

const components = (d, fp) => {
  return (`import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ${d.action} } from '../../redux/actions/${d.filename}';

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

export default connect(mapStateToProps, { ${d.action} })(${toCapitalized(d.filename)});`);
};

module.exports = components;

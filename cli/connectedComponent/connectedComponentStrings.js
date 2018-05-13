const createAdditions = (d, fp) => ([
  {
    str0: `{\n  ${d.actionOption},\n}`,
    reg0: /({\n\n}) from '.\/[a-zA-Z-]+actions';/,
    str1: `\n  ${d.actionOption},\n`,
    reg1: /([\n]+)} from '.\/[a-zA-Z-]+actions';/,
  },
  {
    str0: `{\n  ${d.actionOption}: () => void,\n}`,
    reg0: /type Props = ({\n\n})/,
    str1: `  ${d.actionOption}: () => void,\n}`,
    reg1: /type Props = {[a-zA-Z\n\s:()=>, ]+(})/,
  },
  {
    str0: `{\n  ${d.actionOption},\n}`,
    reg0: /export default connect\(mapStateToProps, ({\n\n})/,
    str1: `  ${d.actionOption},\n}`,
    reg1: /export default connect\(mapStateToProps, {[a-zA-Z\n\s:()=>, ]+(})/,
  },
]);

const createDefaultFileString = (d, fp) => {
  return (`import React, { Component } from 'react';
import { connect } from 'react-redux';
import {\n\n} from '${fp.actions.r_}';

// import '${fp.scss.re}';

class ${d.component} extends Component {
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

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {\n\n})(${d.component});\n`);
};

// const addToConnectedComponentFile = (d, fileStr) => {
//   const additions = createAdditions(d.actionOption);
//   return addToFile(fileStr, d.actionOption, additions);
// };

module.exports = { createDefaultFileString, createAdditions };

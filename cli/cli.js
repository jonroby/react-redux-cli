#!/usr/bin/env node

const program = require('commander');

const handle = require('./handle');

const handleCreateActions = require('./actions/handleCreateActions');
const handleCreateReducer = require('./reducer/handleCreateReducer');
const handleCreateSaga = require('./saga/handleCreateSaga');
// handleConnectedComponent
const handleDefault = require('./default/handleDefault');

const getFilepath = require('./helpers/getFilepath');
const { createActionCamels, createActionConstants } = require('./helpers/createActionConstants');

// program
//   .version('0.0.1')
//   .description('The Noir CLI');

program
  .usage('cre <component>')
  .option('-a, --action-creator [actionName] [impure]', 'Create Action')
  .option('-r, --reducer [actionName] [impure]', 'Create Reducer')
  .option('-s, --saga <actionName>', 'Create Saga')
  .option('-c, --connected-component [actionName]', 'Create Connected Component')
  .option('-d, --default [actionName] [impure]', 'Create all Default')

  .action((cmd, component, opt1, opt2) => {
    const option = !opt2 ? opt1 : opt2; // setup option
    const isImpure = !!opt2 && opt1 === 'impure'; // roundabout way of determining that impure was entered.
    const isPure = !isImpure;
    const filepath = getFilepath(component);

    // setup should occur elsewhere
    const options = ['actionCreator', 'reducer', 'saga', 'connectedComponent', 'default'];
    let actionOption = '';
    options.forEach(o => {
      if (option[o] !== undefined && option[o] !== true) {
        actionOption = option[o];
      }
    });

    // check if 'actionOption' is 'impure' and throw error if it is. The user
    // probably meant to create an action with the additional option impure.

    const actionConstants = createActionConstants(actionOption, isPure);
    const actionCamels = createActionCamels(actionOption, isPure);
    const data = {
      component,
      isPure,
      actionOption,
      actionConstants,
      actionCamels,
    };

  //   if (option.actionCreator) {
  //     handleCreateActions(data, filepath);
  //   }

  //   if (option.reducer) {
  //     handleCreateReducer(data, filepath);
  //   }

  //   if (option.saga) {
  //     handleCreateSaga(data, filepath);
  //   }

    if (true) {
      console.log('here')
      handle(data, filepath);
    }

  //   if (option.default) {
  //     handleDefault(data, filepath);
  //   }
  });

program.parse(process.argv);

// put in arguments handle(d, fp)
// 
// check d.actionOption. In transform object[d.actionOption]
// handle(d, fp)



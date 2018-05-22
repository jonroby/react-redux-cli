// arg 1
// gen
// del

// arg 2
// <actionName>

// arg 3
// component -c
// reducer -r
// action -a
// saga -s

// dux gen fetchSomething -p user -c
// dux <gen*/del> fetchSomething <pure*/impure> <name> <-c/-r/-s/-a/all>

const handle = require('./handle');
const getFilepath = require('./helpers/getFilepath');
const { createActionCamels, createActionConstants } = require('./helpers/createActionConstants');



console.log('process ', process.argv);

const args = process.argv.slice(2);

// add logic for optional arguments
const action = 'fetchAThing';
const isPure = true;
const filename = 'user';
const filetype = 'component'; // 
const actionConstants = createActionConstants(action, isPure);
const actionCamels = createActionCamels(action, isPure);

const filepath = getFilepath(filename);

const data = {
  action,
  isPure,
  filename, // ?
  filetype, // ?
  actionConstants,
  actionCamels,
};

console.log('data ', data);

handle(data, filepath);





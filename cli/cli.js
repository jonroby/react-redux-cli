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


const commands = {
  '-a': 'actions',
  '-r': 'reducers',
  '-c': 'components'
}

// <cli-command> <action> <componentName> (-c/-r/-a)
const args = process.argv.slice(2);

// add logic for optional arguments
const action = args[0];
const isPure = args.filter(a => a === "impure").length === 0;
const filename = args[1];
const filetypes = commands[args[2]] ? [commands[args[2]]] : ['components', 'actions', 'reducers']; // actions reducers sagas components

const actionConstants = createActionConstants(action, isPure);
const actionCamels = createActionCamels(action, isPure);

const filepath = getFilepath(filename);

filetypes.forEach(filetype => {
  const data = {
    action,
    isPure,
    filename,
    filetype,
    actionConstants,
    actionCamels,
  };

  handle(data, filepath);
});

// exec prettier command



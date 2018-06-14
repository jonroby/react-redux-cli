This is a CLI for React and Redux. Still very much in its early stages, the goal of this project is to automate many of the tedious tasks associated with React/Redux apps. No, snippets are not enough!

Although this is just a demo, eventually I want to create an NPM package that installs an (opinionated) redux directory into `/src`. While I do anticipate some customatization (sagas vs thunks/REST vs GraphQL), I believe a certain structure, even if arbitrary, is required to ensure everything works consistently.

## Basic Idea ##

Frequently, _though not always_, when creating an action, there is a 1-1-1-1 relation between the component, action, reducer, and even saga (or thunks, or whatever your favorite async middleware is).

This much should be automated and I want to take advantage of this fact, but as noted, the relationship doesn't always hold. So I've decided on the following strategy. The folder structure is made to easily accommodate one-to-many, many-to-one, and many-to-many relationships. But the command line options will assume a 1-1-1-1 relationship and the developer must "opt out" of this by adding a special command.

The folder structure:

```
|-- _src
    |-- _components
        |-- _Component1
            |-- Component1.js
        |-- _Component2
            |-- Component2.js
    |-- _redux
        |-- _actions
            |-- index.js
            |-- component1.js
            |-- component2.js
        |-- _reducers
            |-- index.js
            |-- component1.js
            |-- component2.js
        |-- _sagas (unimplemented)
```

The basic command:

```
node cli/cli.js <actionName> <componentName | *fileName> <?option>
```

(The `node cli/cli.js` bit will eventually be changed to some dumb three letter name for the cli.)

## Example ##

git clone then ```nvm use 8 && npm i```

Say you have a `User` component, and corresponding reducer, and action file. You want to add an action `fetchUserName`. By invoking the following command at the terminal `node cli/cli.js fetchUserName user`, the following will be generated for you:

- `User.js` (Component)
1) `fetchUserName` is imported from the actions file
2) `fetchUserName` is added to mapDispatchToProps

- `user-actions.js`
1) A `FETCH_USER_NAME` constant will be created and exported
2) a `fetchUserName` action creator is created and exported

- `user-reducer.js`
1) The `FETCH_USER_NAME` constant is imported
2) A case expression is used with that constant in the reducer's switch statement

## Questions ##

__What if the component, action or reducer file(s) don't exist?__
They're automatically generated. Additionally, the userReducer is imported and added to the `combineReducers` function in the `root-reducer.js` file. Sagas are being added to the project and the same behavior will apply.

__What if I only want to create an action in the action file, or only an action in the component file, etc.?__
That is what the `<option>` is for. Just add a `-c` for connected component, `-a` for action, or `-r` for reducer, to the end of `node cli/cli.js fetchUserName user`.

__What if I don't have a 1-1 mapping?__
(Currently unimplemented). Then instead of using `user` in the command, prefix a filepath with an asterisk, as well as adding one of the `-c`, `-a`, `-r`, options and it will be created for you.

__What if I want to delete one of those actions?__
(Currently unimplemented). Just add `del` as your first argument after `node cli/cli.js`.

__What about impure actions?__
(Currently unimplemented). Just add an `--impure` flag, and then the required additional constants (`FETCH_SUCCESS`, `FETCH_FAILURE`) will be added everywhere you'd expect.

__What if I just want to create a basic component, a connected component without any actions, an action file with no actions, a reducer file with no imported actions?
I'm not sure how best to achieve this yet. Maybe a special character like so, instead of the normal flag `$c`? 

Options:
- [X] `-c` connected component
- [X] `-a` action
- [X] `-r` reducer
- `-s` saga
- impure
- del
- *filename

## Upcoming Features ##
- Sagas
- GraphQL layer
- Bug: Can double import actions. Instead disallow and provide warning to developer.




This is a CLI for React and Redux. Still very much in its early stages, the goal of this project is to automate the many of the tedious tasks associated with React/Redux apps. No, snippets are not enough!

Although this is just a demo, eventually I want to create an NPM package that installs an (opinionated) redux directory into `/src`. While I do anticipate some customatization (sagas vs thunks/REST vs GraphQL), I believe a certain structure, even if arbitrary, is required to ensure everything works consistently.

## Basic Idea ##

The basic command is this:

```
node cli/cli.js <action> <componentName | *fileName> <?option>
```

(The `node cli/cli.js` bit will eventually be changed to some dumb three letter name for the cli.)

What does this mean? Frequently, _though not always_, when creating an action, there is a 1-1-1-1 relation between the component, action, reducer, and even saga (or thunks, or whatever you're favorite async middleware is).

Since it doesn't happen all of the time, I've chosen the folder structure below.

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
They're automatically generated. Additionally, in the `root-reducer.js` file, the userReducer is imported and added to the `combineReducers` function. Sagas are being added to the project and the same behavior will apply.

__What if I only want to create an action in the action file, or only an action in the component file, etc.?__
That is what the `<option>` is for. Just add a `-c` for connected component, `-a` for action, or `-r` for reducer, to the end of `node cli/cli.js fetchUserName user`.

__What if I don't have a 1-1 mapping?__
(Currently unimplemented). Then instead of using `user` in the command, prefix a filepath with an asterisk, as well as adding one of the `-c`, `-a`, `-r`, options and it will be created for you.

__What if I want to delete one of those actions?__
(Currently unimplemented). Just add `del` as your first argument after `noir cli/cli.js`.

__What about impure actions?__
(Currently unimplemented). Just add an `--impure` flag, and then the required additional constants (`FETCH_SUCCESS`, `FETCH_FAILURE`) will be added everywhere you'd expect.

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




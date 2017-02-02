# Voter-info

This simple react-redux app demonstrates the minimal usage of redux-thunk to handle async actions in react-redux.

The redux action-creator in `src/actions.js` fetchReps() is a thunk, which:
- Dispatches REQUEST_REPS action to set a loading state
- uses the fetch API to make an AJAX call
- Dispatches RECEIVE_REPS from within the .then() handler attached to the AJAX call, passing received data to the reducer for hydration into the store.

// then create your reducer
// we'll import axios for async redux
import axios from "axios";

// ACTIONS

const TEST_ACTION = "TEST_ACTION";

// ACTION CREATORS

export function testAction() {
  return {
    type: TEST_ACTION,
    payload: axios
      .get("/api/test")
      .then(response => response.data)
      .catch(err => err)
  };
}

// INITIAL STATE

const initialState = {
  testData: []
};

// REDUCER

export default function reducer(state = initialState, action) {
  // each action, currently just async actions.
  // you can have other actions in here that aren't all async as well.
  console.log(action.type);
  switch (action.type) {
    case `${TEST_ACTION}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${TEST_ACTION}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        testData: action.payload
      });

    case `${TEST_ACTION}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });

    default:
      return state;
  }
}

// Make sure to add the reducer to your store.

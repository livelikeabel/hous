import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

// action types
var SHOW_ACTION = "calc/SHOW_ACTION";

// action creator
export var showAction = createAction(SHOW_ACTION);

// initial state
var initialState = Map({
  source: 3,
  show: false
});

// reducer
export default handleActions(
  {
    [SHOW_ACTION]: (state, action) => {
      return state.set("show", true);
    }
  },
  initialState
);

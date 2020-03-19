import * as actions from "../actions/singlePostActions";

export const initialState = {
  post: {},
  loading: true,
  hasErrors: false
};

export default function singlePostReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POST:
      return {
        ...state,
        loading: true
      };
    case actions.GET_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        hasErrors: false
      };
    case actions.GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    default:
      return state;
  }
}

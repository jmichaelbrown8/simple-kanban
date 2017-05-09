// Action types

export const MOVE_CARD = 'MOVE_CARD';
export const EDIT_CARD = 'EDIT_CARD';


const initialState = {
  id: 0,
  column: "",
  row: "",
  description: "",
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case MOVE_CARD:
      let result = {...state};
      if (action.row) {
        result = {
          ...result,
          row: action.row
        }
      }
      if (action.column) {
        result = {
          ...result,
          column: action.column
        }
      }
      return result;
    case EDIT_CARD:
      return {
        ...state,
        description: action.description
      }
    default:
      return {
        ...initialState,
        ...state
      };
  }
}

import card from './card';

// action types

export const ADD_COLUMN = 'ADD_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';
export const NAME_COLUMN = 'NAME_COLUMN';
export const MOVE_COLUMN = 'MOVE_COLUMN';

export const ADD_ROW = 'ADD_ROW';
export const REMOVE_ROW = 'REMOVE_ROW';
export const NAME_ROW = 'NAME_ROW';
export const MOVE_ROW = 'MOVE_ROW';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const EDIT_CARD = 'EDIT_CARD';

const initialState = {
  columns: [],
  rows: [],
  cards: []
};

const initialColumn = {
  id: 0,
  name: ""
};

const initialRow = {
  id: 0,
  name: ""
};

// action helpers

const add = (array, item) => {
  return [...array, item];
};

const remove = (array, index) => {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ];
};

const removeById = (array, id) => {
  return array.filter((item) => {return item.id !== id;});
};

// replaces the array object with the matching id with the new name
const name = (array, id, name) => {
  return array.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        name
      }
    }
    return item;
  });
};

const move = (array, index, newIndex) => {
  if (newIndex < index) {
    return [
        ...array.slice(0, newIndex),
        array[index],
        ...array.slice(newIndex, index),
        ...array.slice(index + 1)
      ];
  }
  return [
      ...array.slice(0, index),
      ...array.slice(index + 1, newIndex + 1),
      array[index],
      ...array.slice(newIndex + 1)
    ];
};

// action creators

export function column(state = initialColumn, action = {}) {
  switch(action.type) {
    default:
      return {
        ...initialColumn,
        ...state
      };
  }
}

export function row(state=initialRow, action = {}) {
  switch(action.type) {
    default:
      return {
        ...initialRow,
        ...state
      };
  }
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: add(state.columns, column(action.column))
      };
    case REMOVE_COLUMN:
      return {
        ...state,
        columns: remove(state.columns, action.index)
      };
    case NAME_COLUMN:
      return {
        ...state,
        columns: name(state.columns, action.id, action.name)
      };
    case MOVE_COLUMN:
      return {
        ...state,
        columns: move(state.columns, action.index, action.newIndex)
      };
    case ADD_ROW:
      return {
        ...state,
        rows: add(state.rows, row(action.row))
      };
    case REMOVE_ROW:
      return {
        ...state,
        rows: remove(state.rows, action.index)
      };
    case NAME_ROW:
      return {
        ...state,
        rows: name(state.rows, action.id, action.name)
      };
    case MOVE_ROW:
      return {
        ...state,
        rows: move(state.rows, action.index, action.newIndex)
      };

    case ADD_CARD:
      return {
        ...state,
        cards: add(state.cards, action.card)
      };
    case REMOVE_CARD:
      return {
        ...state,
        cards: removeById(state.cards, action.id)
      };
    case MOVE_CARD:
      return {
        ...state,
        cards: move(state.cards, action.index, action.newIndex)
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((c) => {if (c.id === action.id) return card(c, action); return c;})
      };
    default:
      return {
        ...initialState,
        ...state
      };
  }
}

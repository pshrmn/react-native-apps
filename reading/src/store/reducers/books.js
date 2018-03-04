import * as types from '../constants';

function booksReducer(state = [], action) {
  switch(action.type) {
  case types.ADD_BOOK:
    return [...state, action.book];
  case types.FINISH_BOOK:
    return state.map(b =>
      b.id === action.bookID
        ? {...b, finished: new Date()}
        : b
    );
  case types.REMOVE_BOOK:
    return state.filter(b =>
      b.id !== action.bookID ? b : undefined
    );
  case types.CLEAR_BOOKS:
    return [];
  default:
    return state;
  }
}

export default booksReducer;

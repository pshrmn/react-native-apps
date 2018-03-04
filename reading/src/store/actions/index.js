import * as types from '../constants';

export const addBook = book => ({
  type: types.ADD_BOOK,
  book
});

export const finishBook = bookID => ({
  type: types.FINISH_BOOK,
  bookID
});

export const removeBook = bookID => ({
  type: types.REMOVE_BOOK,
  bookID
});

export const clearBooks = () => ({
  type: types.CLEAR_BOOKS
});

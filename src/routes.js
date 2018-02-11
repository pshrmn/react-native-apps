import Home from './route-components/Home';
import StartReading from './route-components/StartReading';
import ReadingList from './route-components/ReadingList';
import Book from './route-components/Book';

export default [
  {
    name: 'Home',
    path: '',
    match: {
      response({ set }) {
        set.body(Home);
      }
    }
  },
  {
    name: 'Start Reading',
    path: 'start-reading',
    match: {
      response({ set }) {
        set.body(StartReading);
      }
    }
  },
  {
    name: 'Reading List',
    path: 'reading-list',
    match: {
      response({ set }) {
        set.body(ReadingList);
      }
    }
  },
  {
    name: 'Book',
    path: 'book/:id',
    match: {
      response({ set }) {
        set.body(Book);
      }
    }
  }
];

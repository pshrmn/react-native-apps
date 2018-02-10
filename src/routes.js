import Home from './screens/Home';
import StartReading from './screens/StartReading';
import ReadingList from './screens/ReadingList';

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
  }
];

import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Curious } from '@curi/react-native';

import ControlButton from './ControlButton';
import { removeBook } from '../../store/actions';

function confirmRemove(id, removeBook, router) {
  Alert.alert(
    'Remove Book',
    'Are you certain you want to remove this book?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Confirm',
        onPress: () => {
          removeBook(id);
          router.history.go(-1);
        }
      }
    ]
  );
}

const RemoveBookButton = ({ id, removeBook, router }) => (
  <ControlButton
    text='Remove'
    icon='trash'
    onPress={() => { confirmRemove(id, removeBook, router); }}
  />
)

const ConnectedButton = connect(
  null,
  { removeBook }
)(RemoveBookButton);

export default props => (
  <Curious>
    { value => <ConnectedButton {...props} router={value.router} />}
  </Curious>
);

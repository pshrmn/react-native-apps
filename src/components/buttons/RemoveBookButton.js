import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import ControlButton from './ControlButton';
import { removeBook } from '../../store/actions';

function confirmRemove(id, removeBook) {
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
        }
      }
    ]
  );
}

const RemoveBookButton = ({ id, removeBook }) => (
  <ControlButton
    text='Remove'
    icon='trash'
    onPress={() => { confirmRemove(id, removeBook); }}
  />
)

export default connect(
  null,
  { removeBook }
)(RemoveBookButton);

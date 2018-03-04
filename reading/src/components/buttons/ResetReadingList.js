import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';

import { clearBooks } from '../../store/actions';

class ResetReadingList extends React.Component {
  handlePress = () => {
    Alert.alert(
      'Clear books',
      'Are you sure you want to clear your books?',
      [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {
          text: 'OK',
          onPress: () => {
            this.props.clearBooks();
          }
        }
      ]
    )
  }

  render() {
    return (
      <FAB
        icon="remove"
        style={{ marginRight: 5, backgroundColor: '#d90000' }}
        onPress={this.handlePress}
      />
    );
  }
}

export default connect(
  null,
  { clearBooks }
)(ResetReadingList);

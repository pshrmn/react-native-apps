import React from 'react';
import { TouchableOpacity, Text, DatePickerAndroid, StyleSheet } from 'react-native';
import moment from 'moment';


class DatePicker extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          DatePickerAndroid
            .open({
              date: this.props.date
            })
            .then(result => {
              if (result.action === DatePickerAndroid.dismissedAction) {
                return;
              }
              this.props.update(
                moment()
                  .date(result.day)
                  .month(result.month)
                  .year(result.year)
              );
            });
        }}
      >
        <Text style={styles.text}>
          {moment(this.props.date).format('MMM DD, YYYY')}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {

  },
  text: {
    fontSize: 20
  }
});

export default DatePicker;

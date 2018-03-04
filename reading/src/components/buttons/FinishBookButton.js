import React from 'react';
import { connect } from 'react-redux';

import ControlButton from './ControlButton';
import { finishBook } from '../../store/actions';

const FinishBookButton = ({ id, finishBook }) => (
  <ControlButton
    text='Finish'
    icon='check'
    onPress={() => { finishBook(id); }}
  />
)

export default connect(
  null,
  { finishBook }
)(FinishBookButton);

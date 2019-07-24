import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import compose from 'recompose/compose';

export default compose(
  withState('value', 'onChange', ''),
  withProps(({ value }) => ({
    isValid: value.toLowerCase() === 'bruins'
  }))
);

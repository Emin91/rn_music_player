import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const getStyle = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: COLORS.selago,
    },
  });
  return styles;
};

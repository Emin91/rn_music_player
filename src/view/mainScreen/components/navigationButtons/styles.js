import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 0.25,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      },
  });
  return styles;
};

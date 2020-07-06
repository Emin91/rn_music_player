import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    mainContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },      
  });
  return styles;
};

import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    mainContainer: {
        flex: 0.45,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 18,
        color: '#575b6e',
      },
      description: {
        fontSize: 18,
        color: '#727890',
      },
      
  });
  return styles;
};

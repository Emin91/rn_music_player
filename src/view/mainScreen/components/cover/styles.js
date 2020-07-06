import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    coverContainer: {
      alignItems: 'center',
    },
    coverImage: {
      width: 220,
      height: 220,
      borderRadius: 150,
      borderColor: '#dadff1',
      borderWidth: 7,
    }
  });
  return styles;
};

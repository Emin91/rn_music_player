import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    neumorph: {
        shadowRadius: 4,
        borderRadius: 60,
        backgroundColor: '#e4eafb',
        width: 60,
        height: 60,
        borderWidth: 4,
        borderColor: '#d3d9ea',
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  return styles;
};

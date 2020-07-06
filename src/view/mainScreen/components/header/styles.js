import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    navContainer: {
        flex: 0.18,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      buttonContainer: {
        flex: 0.25, 
        justifyContent: 'center', 
        alignItems: 'flex-end',
      },
      playingNowContainer: {
        flex: 0.5, 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      playingNowTextContainer: {
        fontSize: 18,
        color: '#a8afc8',
      },
  });
  return styles;
};

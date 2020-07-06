import React from 'react';
import {View, Text} from 'react-native';
import {getStyle} from './styles';

const DescriptionText = () => {
  const styles = getStyle();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Lose It</Text>
      <Text style={styles.description}>Flume ft. Vic Mensa</Text>
    </View>
  );
};

export default DescriptionText;

import React from 'react';
import {View} from 'react-native';
import {getStyle} from './styles';
import Slider from 'react-native-slider'

const SliderComponent = () => {
  const styles = getStyle();

  return (
    <View style={styles.mainContainer}>
      <Slider
          style={{width: '85%'}}
          minimumTrackTintColor='#757dc7'
          thumbStyle={{backgroundColor: '#7f88fa'}}
          trackStyle={{backgroundColor: '#8e929c',}}/>
    </View>
  );
};

export default SliderComponent;

import React from 'react';
import {View} from 'react-native';
import {getStyle} from './styles';
import CoverContainer from './components/cover';
import SliderComponent from './components/slider';
import DescriptionText from './components/description';
import PlayerHeader from '../mainScreen/components/header';
import NavigationButtons from './components/navigationButtons';

const MainScreen = () => {
  const styles = getStyle();
  return (
    <View style={styles.mainContainer}>
      <PlayerHeader />
      <CoverContainer />
      <View style={{flex: 0.2}}>
        <DescriptionText />
        <SliderComponent />
      </View>
      <NavigationButtons />
    </View>
  );
};

export default MainScreen;

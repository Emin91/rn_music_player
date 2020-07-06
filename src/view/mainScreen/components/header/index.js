import React from 'react';
import {View, Text} from 'react-native';
import RoundButton from '../roundButton'
import {getStyle} from './styles';
import Icon from '../../../../assets/icons/iconList';

export default function PlayerHeader() {
  const styles = getStyle();
  return (
    <View style={styles.navContainer}>
      <View style={styles.buttonContainer}>
        <RoundButton width={60} height={60} borderRadius={60 / 2}>
          <Icon.AntDesign name={'arrowleft'} size={25} color={'#a0a8c2'} />
        </RoundButton>
      </View>
      <View style={styles.playingNowContainer}>
        <Text style={styles.playingNowTextContainer}>PLAYING NOW</Text>
      </View>
      <View style={[styles.buttonContainer, {alignItems: 'flex-start'}]}>
        <RoundButton width={60} height={60} borderRadius={60 / 2}>
          <Icon.Entypo name={'menu'} size={25} color={'#a0a8c2'} />
        </RoundButton>
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getStyle} from './styles';
import Icon from '../../../../assets/icons/iconList';
import RoundButton from '../../components/roundButton';

const NavigationButtons = () => {
  const styles = getStyle();

  return (
    <View
      style={styles.mainContainer}>
      <View>
        <RoundButton width={80} height={80} borderRadius={80 / 2}>
          <Icon.Foundation name={'previous'} size={25} color={'#a0a8c2'} />
        </RoundButton>
      </View>
      <View>
        <RoundButton width={90} height={90} borderRadius={90 / 2}>
          <Icon.Ionicons name={'ios-pause'} size={50} color={'#a0a8c2'} />
        </RoundButton>
      </View>
      <View>
        <RoundButton width={80} height={80} borderRadius={80 / 2}>
          <Icon.Foundation name={'next'} size={25} color={'#a0a8c2'} />
        </RoundButton>
      </View>
    </View>
  );
};

export default NavigationButtons;

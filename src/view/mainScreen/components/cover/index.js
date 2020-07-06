import React from 'react';
import {View, Image} from 'react-native';
import RoundButton from '../../components/roundButton';
import {getStyle} from './styles'

const CoverContainer = () => {
  const styles = getStyle();
  return (
    <View style={{flex: 0.43, justifyContent: 'center', alignItems: 'center', }}>
      <View style={styles.coverContainer}>
        <RoundButton width={220} height={220} borderRadius={220 / 2}>
          <Image
            source={require('../../../../assets/images/cover.jpg')}
            style={styles.coverImage}
          />
        </RoundButton>
      </View>
    </View>
  );
};

export default CoverContainer;

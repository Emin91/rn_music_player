import React from 'react'
import {TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {getStyle} from './styles';

const RoundButton = ({children, width, height, borderRadius}) => {
    const styles = getStyle();
    return (
      <TouchableOpacity>
        <Neomorph style={[styles.neumorph, {width, height, borderRadius }]}>{children}</Neomorph>
      </TouchableOpacity>
    );
  };

 export default RoundButton 


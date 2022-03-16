import React from 'react';

import {TouchableOpacity,Text} from 'react-native';

import {styles} from './styles';

const CustomTouchableOpacity = ({SelectedItem,onHandleModal}) => {
    return (
        
      <TouchableOpacity onPress={() => onHandleModal(SelectedItem.id)}>

          
          {SelectedItem.realizado === "SI"
              
              ? <Text style={styles.textList2}>{SelectedItem.value}</Text>
              : <Text style={styles.textList}>{SelectedItem.value}</Text>
        }
            </TouchableOpacity>

        
    )


}


export default CustomTouchableOpacity;
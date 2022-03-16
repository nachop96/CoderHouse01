import React from 'react';

import {FlatList,renderItem} from 'react-native';
import CustomTouchableOpacity from '../../organisms/customTouchableOpacity/index.js';


const CustomFlatList = ({ontextList,onHandleModal}) => {
    return (
      <FlatList
      data={ontextList}
          renderItem={({ item }) => (
            <CustomTouchableOpacity
            SelectedItem={item}
            onHandleModal={onHandleModal}
              
            />
          )}
          keyExtractor={item => item.id.toString()}
    />

        
    )


}


export default CustomFlatList;
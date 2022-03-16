import React from 'react';

import {View,Text,Modal,Button} from 'react-native';

import {styles} from './styles';

const CustomModal = ({lista,description,selectedItem,buttonText1,buttonText2,onHandleDeleteItem,onSetModalVisible,visible,modalVisible}) => {
  if (selectedItem.realizado==='SI') {
  
        description='Desea restaurar este item?'
        
      
  }
    return (
    
      
        <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
       >
       <View style={styles.modalContainerContent}>
        <View style={styles.modaTitle}>
          
        </View>
        <View style={styles.modalContent}>
          <Text>{description}</Text>
          <Text style={styles.modalContentText}>{selectedItem.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            title={buttonText1}
            color="#841584"
            onPress={() => onHandleDeleteItem(selectedItem)}
          />
          <View style={styles.modalButton}>
          <Button
            title={buttonText2}
            color="#841584"
            onPress={() => onSetModalVisible(!modalVisible)}
          />
          </View>
       
        </View>
        </View>
        </Modal>

        
    )


}


export default CustomModal;
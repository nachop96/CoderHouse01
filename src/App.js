

import React, { useState } from 'react';
import {
  Button,
  View,
  
} from 'react-native';

import Input from './components/atoms/input/index.js'
import CustomModal from './components/molecules/customModal/index.js';
import CustomFlatList from './components/molecules/customFlatList/index.js';
import { styles } from './styles';



const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});


  const handleOnChangeInput = (value) => {
    setText(value);
  }

  const addItem = () => {
    if (text !== '') {
      setTextList([...textList, { id: textList.length + 1, value: text, realizado: 'NO'}])
      setText('');
    }
    else {
      alert('Campo vacio')

    }

  }

  const handleDeleteItem = (selectedItem) => {
   
    if (selectedItem.realizado === 'SI') {
      selectedItem.realizado = 'NO';
    }
    else{
    selectedItem.realizado = 'SI';}
    setModalVisible(!modalVisible);

    
  }






  const onHandleModal = (id) => {

    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  }


  return (
    <View style={styles.container}>

  

      <View style={styles.containerInput}>

        <Input
          placeholder='Nombre:'
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor='#841584'
          style={styles.textInput}
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
        <Button
          onPress={() => { addItem() }}
          title="Add"
          color="#841584"

        />
      </View>


    
      <View style={styles.containerList}>
        <CustomFlatList
          ontextList={textList}
          onHandleModal={onHandleModal}
        />
      </View>


      
        <CustomModal
        visible ={modalVisible}
        description='Desea eliminar este item?'
        selectedItem={selectedItem}
        buttonText1='Si'
        buttonText2='No'
        modalVisible={modalVisible}
        onHandleDeleteItem={handleDeleteItem}
        onSetModalVisible={setModalVisible}
        lista={textList}

        />
         
        
        
        
        </View>
        

  );

};
export default App;

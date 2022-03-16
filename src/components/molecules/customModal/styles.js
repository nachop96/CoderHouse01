import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({


modalContainerContent:{
      
    width: '70%',
    height: '28%',
    backgroundColor: '#ccc',
    
    borderRadius: 10,
    
    elevation:4,
    borderWidth:1,
    shadowOffset: {width: 1, height:1},
    justifyContent: 'center',
    marginLeft: 55,
    marginTop:200,


  },

  modaTitle:{
    fontSize: 14,
    color: '#212121',
    padding:25,

  },
  modalContent:{
    paddingHorizontal:25,
  },
  modalButton:{
    marginVertical:10,
    paddingHorizontal:25,
    
  },

    modalContentText: {
      fontSize:14,
      color :'#212121',
      fontWeight: 'bold',
      marginVertical: 10,


    }

})
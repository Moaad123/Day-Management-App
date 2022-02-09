import React, { useState } from 'react';
import { StyleSheet, View,TouchableOpacity,TextInput  } from "react-native";
import { Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'


const AddModal = () => {
  const [text, onChangeText] = React.useState("");
  const [Description, onChangeDescription] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [PersonalColor,setPersonalColor] = useState({logo:"white",background:"black"});
  const [GeneralColor,setGeneralColor] = useState({logo:"black",background:"white"});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Date,setDate] = useState("dd.mm.yyyy");
  const [Time,setTime] = useState("hh:mm");
  const [Picker,setPicker] = useState();
  const changeColor = () => {
    if(PersonalColor.logo === "black"){
      setPersonalColor({logo :"white",background :"black"})
      setGeneralColor({background :"white",logo :"black"})
    }else{
      setPersonalColor({logo :"black",background :"white"})
      setGeneralColor({background :"black",logo :"white"})
    }

    console.log(GeneralColor.logo);
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setPicker("date");
  };

  const showTimePicker = () => {
    setDatePickerVisibility(true);
    setPicker("time");
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }; 

  const handleChange = (date) => {
    if(Picker === "date"){
      setDate(moment(date).format("DD.MM.YYYY"));
    }else{
      setTime(moment(date).format("HH.mm"));
    }
    setDatePickerVisibility(false);
  };
 
  return (
    <>
      <TouchableOpacity style={{bottom:0,top:-20,justifyContent:"center",alignItems:"center"}} onPress={() => {setModalVisible(true)}}>
            <Ionicons name={"add-circle"} size={80} color={"orange"} style={{height:80}}/>
      </TouchableOpacity>
      <View style={styles.container}> 
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <View style={styles.name}>
              <FontAwesome style={styles.icon} name="user" color="black" size={40}/>
              <View style={styles.verticleLine}></View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Places Title'
              />
            </View>
            <Text style={{paddingVertical:"5%",fontSize:18,fontWeight:"bold"}}>Category</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TouchableOpacity style={{backgroundColor:PersonalColor.background,...styles.type}} onPress={changeColor}>
                <FontAwesome style={styles.icon} name="user" color={PersonalColor.logo} size={20}/>
                <Text style={{color:PersonalColor.logo,fontSize:20,fontWeight:"bold"}}>Personal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:GeneralColor.background,...styles.type}} onPress={changeColor}>
                <FontAwesome style={styles.icon} name="users" color={GeneralColor.logo} size={20}/>
                <Text style={{color:GeneralColor.logo,fontSize:20,fontWeight:"bold"}}>General</Text>
              </TouchableOpacity> 
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingVertical:"5%",justifyContent:"space-between"}}>
              <View>
                <Text style={{paddingVertical:"5%",fontSize:18,fontWeight:"bold"}}>Date</Text>
                <Button uppercase={false} icon="calendar" mode="text" onPress={showDatePicker} contentStyle={{flexDirection: 'row-reverse'}} color='black'>
                  <Text style={{fontSize:20,fontWeight:"bold"}}>{Date}</Text>
                </Button>
              </View>
              <View>
                <Text style={{paddingVertical:"5%",fontSize:18,fontWeight:"bold"}}>Time</Text>
                <Button uppercase={false} icon="clock" mode="text" onPress={showTimePicker} contentStyle={{flexDirection: 'row-reverse'}} color='black'>
                <Text style={{fontSize:20,fontWeight:"bold"}}>{Time}</Text>
                </Button>
              </View>
            </View> 
            <View style={{paddingVertical:"5%"}}>
              <Text style={{paddingVertical:"5%",fontSize:18,fontWeight:"bold"}}>Description</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeDescription}
                value={Description}
                multiline
                style={{backgroundColor:"#F8FAFA",borderRadius:10}}
              />
            </View>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <Button dark mode="contained" contentStyle={{padding:5,paddingHorizontal:25}} color='gray'>
                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Cancel</Text>
              </Button>
              <Button dark mode="contained" contentStyle={{padding:5,paddingHorizontal:25}} color='orange'>
                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Create</Text>
              </Button>
            </View>
          </View>
        </Modal>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={Picker}
            onCancel={hideDatePicker}
            onConfirm={handleChange}
          />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 40,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input:{
    fontSize:30,
    color:"white",
    paddingHorizontal:"5%"
  },
  verticleLine: {
    height: '70%',
    width: 1,
    backgroundColor: 'black',
  },
  name:{
    flexDirection:"row",
    alignItems:"center",
  },
  icon:{
    paddingHorizontal:"3%"
  },
  type:{
    flexDirection:"row",
    alignItems:"center",
    padding:"3%",
    paddingHorizontal:"7%",
    borderRadius:14
  }
});

export default AddModal;
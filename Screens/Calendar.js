import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import CostumSwitch from '../Components/CostumSwitch';
import FirstComp from '../Components/FirstComp';
import SecondComp from '../Components/SecondComp';
import ThirdComp from '../Components/ThirdComp';


const Calender = () =>{
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Junuary', 'Febrary', 'March', 'April', 'Mai', 'June', 'Jully','August','September','October','November','December'];
    const date = new Date()
    const [Day,setDay] = useState(days[date.getDay()])
    const [Month,setMonth] = useState(months[date.getMonth()])
    const [Year,setYear] = useState(date.getFullYear())
    //on click change date function
    const ChangeDate = (DataDate) =>{
        const selectedDate = new Date(DataDate.dateString)
        setDay(days[selectedDate.getDay()])
        setMonth(months[selectedDate.getMonth()])
        setYear(selectedDate.getFullYear())
    }
    const [optionCard,setOptionCard] = useState(1)
    const onSelectSwitch=(value)=>{
        setOptionCard(value)
    }
    return(
        <ScrollView style={styles.screen}>
            <View style={styles.header}>
                <Feather name='align-left' color={'black'} size={35} />
                <View style={{ flexDirection:"row" }}>
                    <Ionicons name="notifications-outline" color="black" size={35} />
                    <EvilIcons name="user" color={'black'} size={45} />
                </View>
            </View>
            <View style={{paddingVertical:"7%",flex : 2}}>
                <View>
                    <Text style={{fontWeight : "bold" ,color:"#ccc" , fontSize: 20}}>{Day}</Text>
                    <Text style={{fontWeight : "bold" ,color:"black" , fontSize: 25}}>{Month}, {Year}</Text>
                </View>
                <Button color='white' onPress={()=>alert('hello world')} uppercase={false} style={styles.picker}>this week</Button>
                    <CalendarProvider date={new Date()}>
                        <WeekCalendar onDayPress={(day) => ChangeDate(day)} firstDay={1} />
                    </CalendarProvider>
            </View>
            <View>
                <CostumSwitch 
                    selectionMode={1} 
                    option1="All Plans" 
                    option2="General" 
                    option3="Personal"
                    onSelectSwitch={onSelectSwitch}/>
            </View>
            {optionCard == 1 && <FirstComp />}
            {optionCard == 2 && <SecondComp />}
            {optionCard == 3 && <ThirdComp />} 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen : {
        padding: "5%",
        backgroundColor: "white"
    }, 
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    invitations:{
        padding:"5%"
    },
    picker:{
        backgroundColor : '#2b4055', 
        color : 'white', 
        width : '30%',
        alignSelf : 'flex-end',
        bottom : '30%'}

})


export default Calender;
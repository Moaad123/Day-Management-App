import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';
import Card from '../Components/Card'; 
const Home = () =>{
    return(
        <ScrollView style={styles.screen}>
            <View style={styles.header}>
                <Feather name='align-left' color={'black'} size={35} />
                <View style={{ flexDirection:"row",left:"20%" }}>
                  <View>
                   <Ionicons name="notifications-outline" color="black" size={35} />
                   <Badge status="warning"
                      containerStyle={{ position: 'absolute', top: -1, right: -1 }}
                      value="02" size={35} style={styles.iconbadge}/>
                  </View>
                    <Image source={require('../images/user7.png')} style={styles.iconimage} />
                </View>
            </View>
            <View style={{paddingVertical:"7%"}}>
                <View style={{ flexDirection:"row",alignItems:"center"}}>
                  <Text style={{fontWeight : "bold" ,color:"black" , fontSize: 20}}>Hello,Ali Husni</Text>
                  <Image source={require('../images/hand1.png')} style={styles.iconhand} />
                </View>
                <Text style={{fontWeight : "bold" ,color:"black" , fontSize: 25}}>Let's planning your day</Text>
            </View>
            <View style={styles.header}>
                <Text style={{fontSize:15, color:"black"}}>Invitation</Text>
                <Text style={{color:"orange"}}>View all</Text>
            </View>
            <View style={styles.invitations}>
            <Card date="Sep 20,2021" heure="08:00 AM" titre="Workshop Design" description="Workshop that discuss design and freelance on 3rd floor ICT Building " action="Accept Invitation"/>
            <Card date="Sep 23,2021" heure="08:00 AM" titre="Futsal Tournament" description="Futsal Match against LionSport FC at The Jakarta Sport Stadium (JSS) " action="Accept Invitation"/>
            <Card date="Sep 21,2021" heure="10:00 AM" titre="Camping Day" description="Camping at Bromo for 2 Days " action="Accept Invitation"/>
            </View>
            <View style={styles.header}>
                <Text style={{fontSize:15, color:"black"}}>Upcoming Plans</Text>
                <Text style={{color:"orange"}}>View all</Text>
            </View>
            <View style={styles.invitations}>
            <Card date="Sep 20,2021" heure="03:00 PM" titre="Urgent Meeting" description="Discussing the flow of the workshop event for tomorrow Monday " action="Invite friends"/>
            <Card date="Sep 20,2021" heure="09:00 PM" titre="Birthday Party" description="Prepared a party to celebrate william's Birthday at his house" action="Invite friends"/>
            </View>
        </ScrollView>
    );
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
    iconimage:{
        height: "115%",
        width: "35%",
    },
    iconbadge:{
        color:"yellow"
    },
    iconhand:{
        height: 30,
        width: 25,
        marginHorizontal:"2%"
    },
})

export default Home;
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    Text,
    View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Button } from 'react-native-paper';

const Card1 = () =>{
    return(
        <View style={{flexDirection:"row",paddingVertical:"5%"}}>
            <MaterialIcons name="groups" color="black" size={35} style={{paddingRight:"5%"}}/>
            <View style={{flex: 1, flexWrap: 'nowrap'}}>
                <View  style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:"black",fontWeight:"bold", fontSize:15}}>Feb 02,2022</Text>
                    <Text style={{color:"black",fontWeight:"bold", fontSize:20}}>12:30 AM</Text>
                </View >
                <Text style={{color:"black",fontWeight:"bold", fontSize:20}}>Second Workshop</Text>
                <Text style={{color:"black", fontSize:15,paddingVertical:"3%"}}>Workshop that discuss design and freelance on 3rd floor ICT Building </Text>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <EvilIcons name="user" color={'black'} size={30} />
                        <EvilIcons name="user" color={'black'} size={30} />
                        <EvilIcons name="user" color={'black'} size={30} />
                        <EvilIcons name="user" color={'black'} size={30} />
                    </View>
                    <Button icon="check" color='green' mode="Outlined" onPress={() => console.log('Pressed')}>
                        <Text style={{fontSize:12}}>Accept Invitation</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default Card1;
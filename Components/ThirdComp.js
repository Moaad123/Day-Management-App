import React from 'react';
import {
    View,
} from 'react-native';
import Card from './Card';

const ThirdComp = () =>{
    return(
        <View style={{paddingVertical:"5%"}}>
          <Card date="Sep 20,2021" heure="08:00 AM" titre="Workshop Design" description="Workshop that discuss design and freelance on 3rd floor ICT Building " action="Accept Invitation"/>
            <Card date="Febrary 23,2022" heure="08:00 AM" titre="Futsal Tournament" description="Futsal Match against LionSport FC at The Jakarta Sport Stadium (JSS) " action="Accept Invitation"/>
            <Card date="Sep 21,2021" heure="10:00 AM" titre="Camping Day" description="Camping at Bromo for 2 Days " action="Accept Invitation"/>
        </View>
    );
}

export default ThirdComp;
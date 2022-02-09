import React from 'react';
import {

    View,
} from 'react-native';
import Card from './Card';

const FirstComp = () =>{
    return(
        <View>
            <Card date="Sep 20,2021" heure="08:00 AM" titre="Workshop Design" description="Workshop that discuss design and freelance on 3rd floor ICT Building " action="Accept Invitation"/>
            <Card date="Sep 23,2021" heure="08:00 AM" titre="Futsal Tournament" description="Futsal Match against LionSport FC at The Jakarta Sport Stadium (JSS) " action="Accept Invitation"/>
            <Card date="Sep 21,2021" heure="10:00 AM" titre="Camping Day" description="Camping at Bromo for 2 Days " action="Accept Invitation"/>
        </View>
    );
}

export default FirstComp;
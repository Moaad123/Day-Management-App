import React, { useState } from "react";
import {View, Text, TouchableOpacity} from 'react-native'

export default function CostumSwitch({
    selectionMode,
    option1,
    option2,
    option3,
    onSelectSwitch
}){
    const [getSelectionMode, setSelectionMode] = useState(selectionMode)
    const updateSwitchData = (value)=>{
        setSelectionMode(value)
        onSelectSwitch(value)
    }
    return(
        <View
        style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 44,
            justifyContent: 'space-around',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>updateSwitchData(1)}
            >
            <View style={{flex: 1, alignItems: 'center'}}><Text style={{fontSize : 15, fontWeight : 'bold', color : getSelectionMode == 1 ? 'black' : '#CCC'}}>{option1}</Text></View>
            <View
                style={{
                    width: 100,
                    height: 6,
                    backgroundColor: getSelectionMode == 1 ? 'orange' : 'white', 
                    paddingTop: 0,
                    marginVertical : 0,
                    marginBottom: 0
                }}
            />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>updateSwitchData(2)}
                >
            <View style={{flex: 1, alignItems: 'center'}}><Text style={{fontSize : 15, fontWeight : 'bold' , color : getSelectionMode == 2 ? 'black' : '#CCC'}}>{option2}</Text></View>
            <View
                style={{
                    width: 100,
                    height: 6,
                    backgroundColor: getSelectionMode == 2 ? 'orange' : 'white', 
                    paddingTop: 0,
                    marginVertical : 0,
                    marginBottom: 0
                }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>updateSwitchData(3)}
                >
                <View style={{flex: 1, alignItems: 'center'}}><Text style={{fontSize : 15, fontWeight : 'bold' , color : getSelectionMode == 3 ? 'black' : '#CCC'}}>{option3}</Text></View>
                <View
                    style={{
                    width: 100,
                    height: 6,
                    backgroundColor: getSelectionMode == 3 ? 'orange' : 'white', 
                    paddingTop: 0,
                    marginVertical : 0,
                    marginBottom: 0
                    }}
                    />  
            </TouchableOpacity>
        </View>
    )
}
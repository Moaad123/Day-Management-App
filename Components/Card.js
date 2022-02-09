import React,{useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';




const Card = ({date,heure,titre,description,action}) =>{
    const [Swipe,setSwipe] = useState();
    const renderRightActions = (progress, dragX) => {
        return (
            <View style={{flexDirection:"row",justifyContent:"center"}}>
                <TouchableOpacity 
                    style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        padding:10,
                        alignItems:"center"
                    }}
                    onPress={() => {Swipe.close()}}
                >
                    <MaterialIcons name="cancel" color={"black"} size={28} />
                    <Text style={{color:"black",fontWeight:"bold"}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        padding:10,
                        alignItems:"center"
                    }}
                >
                    <MaterialIcons name="delete" color={"red"} size={28} />
                    <Text style={{color:"red",fontWeight:"bold"}}>Delete</Text>
                </TouchableOpacity>
            </View>
            
        );
      };

    return(
        <Swipeable 
            renderRightActions={(progress, dragX) =>
                renderRightActions(progress, dragX)
            }
            rightOpenValue={-100}
            ref={(ref) => (setSwipe(ref))}
        >
        <TouchableOpacity style={{flexDirection:"row",paddingVertical:"5%",backgroundColor:"white"}}>
            <MaterialIcons name="groups" color="black" size={35} style={{paddingRight:"5%"}}/>
            <View style={{flex: 1, flexWrap: 'nowrap'}}>
                <View  style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:"black",fontWeight:"bold", fontSize:15}}>{date}</Text>
                    <Text style={{color:"black",fontWeight:"bold", fontSize:20}}>{heure}</Text>
                </View >
                <Text style={{color:"black",fontWeight:"bold", fontSize:20}}>{titre}</Text>
                <Text style={{color:"black", fontSize:15,paddingVertical:"3%"}}>{description} </Text>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row"}}>
                         <Image source={require('../images/user3.png')} style={styles.iconimage} />
                         <Image source={require('../images/user4.png')} style={styles.iconimage1} />
                         <Image source={require('../images/user5.png')} style={styles.iconimage2} />
                         <Image source={require('../images/user6.png')} style={styles.iconimage3} />
                         <Text style={{backgroundColor:"black",color:"white",right:8,padding:2,fontWeight:"bold",fontSize:13,borderRadius:50}}>10+</Text>

                    </View>
                    <Button style={{right:16.9}} icon="check" color='orange' mode="Outlined" onPress={() => console.log('Pressed')}>
                        <Text style={{fontSize:12,right:10}}>{action}</Text>
                    </Button>
                </View>
            </View>
        </TouchableOpacity>
    </Swipeable>
        
    );
}

const styles = StyleSheet.create({
    iconimage:{
        height: 25,
        width: 25,
        left:4
    },
    iconimage1:{
        height: 25,
        width: 25,
        right:3,
        left:2
    },
    iconimage2:{
        height: 25,
        width: 25,
        right:2
    },
    iconimage3:{
        height: 25,
        width: 25,
        right:6
    }


})

export default Card;
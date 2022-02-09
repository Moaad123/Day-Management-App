import Home from '../Screens/Home';
import Calender from '../Screens/Calendar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddModal from '../Screens/AddModal'
import * as React from 'react';

const AddComponent = () => {
    return null
}

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: { height:"9%"},
        }}
        tabBarOptions={{ 
            showLabel: false
        }}
      >
        <Tab.Screen name="Home" component={Home} 
           options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-home'
                      : 'ios-home-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={40} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
              })}
        />
        <Tab.Screen name="Add" component={AddComponent}
            options={()=> ({
                tabBarButton: () => (<AddModal />)
            })}
        />
        <Tab.Screen name="Calendar" component={Calender} 
            options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Calendar') {
                    iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={40} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
              })}
        />
      </Tab.Navigator>
  );
}
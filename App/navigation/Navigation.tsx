import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import Components
import {
    HomeScreenContainer,
    TransferScreenContainer,
    ProfileScreenContainer
} from '../screens/index';

//Routes
import {
    HOME,
    TRANSFER,
    PROFILE
} from './Route';

//Icons
import Icons from 'react-native-vector-icons/Feather';
import Icons2 from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { height, width } from '../utils/dimension';
import { white } from '../utils/colors';

const Home = () => {
    return <HomeScreenContainer />
}

const Transfer = () => {
    return <TransferScreenContainer />
}

const Profile = () => {
    return <ProfileScreenContainer />
}

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {borderTopWidth: 0, elevation: 0},
                }}>
                    <Tab.Screen 
                        name={HOME}
                        component={Home}
                        options={{
                            tabBarIcon: ({focused}) => (
                            <Icons
                                name="home"
                                size={25}
                                color={focused ? '#000' : 'grey'}
                            />
                            ),
                        }}
                    />
                    <Tab.Screen 
                        name={TRANSFER}
                        component={Transfer}
                        options={{
                            tabBarIcon: ({focused}) => (
                            <Icons2
                                name="swap-horizontal"
                                size={25}
                                color={focused ? '#000' : 'grey'}
                            />
                            ),
                        }}
                    />
                    <Tab.Screen 
                        name={PROFILE}
                        component={Profile}
                        options={{
                            tabBarIcon: ({focused}) => (
                            <Icons
                                name="user"
                                size={25}
                                color={focused ? '#000' : 'grey'}
                            />
                            ),
                        }}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width
    }
})

export default Navigator;
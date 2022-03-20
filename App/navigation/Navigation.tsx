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
                />
                <Tab.Screen 
                    name={TRANSFER}
                    component={Transfer}
                />
                <Tab.Screen 
                    name={PROFILE}
                    component={Profile}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;
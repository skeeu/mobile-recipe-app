import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenNavigation from "./HomeScreenNavigation";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeTab" component={HomeScreenNavigation} />
            <Tab.Screen name="FavoritesTab" component={FavoritesScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

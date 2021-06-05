import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants';
import {useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const myColor = "#212121";
    const { colors } = useTheme();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => {
        return state.myDarkMode
    })
    return (
        <View style={{
            marginTop: Constant.statusBarHeight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 43,
            backgroundColor: colors.headerColor,
            elevation: 2,
            // elevation for ios
            shadowOffset: { width: 10, height: 10, },
            shadowColor: 'black',
            shadowOpacity: 1.0,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="youtube" size={43} color="red" style={{ marginLeft: 13 }} />
                <Text style={{ fontSize: 30, marginLeft: 5, color: colors.iconColor, letterSpacing: -3 }}>YouTube</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '35%' }}>
                <Ionicons name="md-videocam" size={32} color={colors.iconColor} />
                <Ionicons name="md-search" size={32} color={colors.iconColor} onPress={()  => navigation.navigate('search')} />
                <MaterialCommunityIcons  name="theme-light-dark" size={32} color={colors.iconColor} onPress={() => dispatch({type: 'change_theme', payload: !currentTheme})} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
});

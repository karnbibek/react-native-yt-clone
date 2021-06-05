import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import Constant from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';

import { Key } from '../../constants';
import MiniCard from '../components/MiniCard';

const Search = ({ navigation }) => {
    const [value, setValue] = useState('');
    // const [miniCardData, setMiniCardData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { colors } = useTheme();
    const myColor = colors.iconColor;

    const miniCardData = useSelector(state => {
        return state.cardData;
    });
    const dispatch = useDispatch()

    const fetchData = () => {
        setLoading(true);
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=${Key}`)
            .then(res => res.json())
            .then(response => {
                // setMiniCardData(response.items);
                dispatch({ type: 'add', payload: response.items })
                setLoading(false);
            })
    }

    return (
        <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 5, elevation: 5, backgroundColor: colors.headerColor }}>
                <Ionicons name="md-arrow-back" size={32} style={{ color: myColor }} onPress={() => navigation.goBack()} />
                <TextInput
                    placeholder="Search YouTube"
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    style={{ width: '70%', backgroundColor: "#e6e6e6", fontSize: 20, padding: 8 }}
                />
                <Ionicons name="md-send" style={{ color: myColor }} size={32} onPress={fetchData} />
            </View>
            {loading &&
                <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />}
            <FlatList
                data={miniCardData}
                renderItem={({ item }) => {
                    return <MiniCard videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item => item.id.videoId}
            />
        </View>
    );
}

export default Search;
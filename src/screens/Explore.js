import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, SafeAreaView } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const ExploreCard = ({ name }) => {

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "red",
            height: 50,
            width: Dimensions.get('window').width / 2 - 8,
            marginTop: 4,
            borderRadius: 10
        }}>
            <Text style={{ fontSize: 22, color: 'white' }}>{name}</Text>
        </View>
    );
}

const Explore = () => {
    const cardData = useSelector(state => {
        return state.cardData;
    })

    const getHeader = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <ExploreCard name="Gaming" />
                    <ExploreCard name="Trending" />
                    <ExploreCard name="Music" />
                    <ExploreCard name="News" />
                    <ExploreCard name="Movies" />
                    <ExploreCard name="Fashion" />
                </View>
                <Text
                    style={{
                        margin: 8,
                        fontSize: 22,
                        borderBottomWidth: 1
                    }}>
                    Trending Videos
                </Text>
            </>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <SafeAreaView>
                <FlatList
                    ListHeaderComponent={getHeader}
                    data={cardData}
                    renderItem={({ item }) => {
                        return <Card videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
                    }}
                    keyExtractor={item => item.id.videoId}
                />
            </SafeAreaView>
        </View>
    );
}

export default Explore;
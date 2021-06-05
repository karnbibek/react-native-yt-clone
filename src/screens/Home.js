import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, FlatList, ActivityIndicator } from 'react-native';
import Constant from 'expo-constants';

import Header from '../components/Header';
import { Key } from '../../constants';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const cardData = useSelector(state => {
    return state.cardData;
  })

  const fetchData = () => {
    setLoading(true);
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=movies&type=video&key=${Key}`)
      .then(res => res.json())
      .then(response => {
        setData(response.items);
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <View style={styles.root}>
      <Header />
      {loading &&
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />}
      <FlatList
        data={!data ? cardData : data}
        renderItem={({ item }) => {
          return <Card videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // marginTop: Constant.statusBarHeight,
  },
});

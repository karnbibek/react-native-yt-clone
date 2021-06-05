import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Constant from 'expo-constants';

const VideoPlayer = ({ route }) => {
    const windowWidth = Dimensions.get('window').width;
    const { videoId, title } = route.params;

    return (
        <View style={{ flex: 1, marginTop: Constant.statusBarHeight, }}>
            <View style={{
                width: '100%',
                height: 200
            }}>
                <WebView
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            </View>
            <Text
                style={{
                    fontSize: 20,
                    width: windowWidth,
                    margin: 9
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View style={{ borderBottomWidth: 1 }} />
        </View>
    );
}

export default VideoPlayer;
import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

const MiniCard = (props) => {
    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    
    const {colors} = useTheme();
    const textColor = colors.iconColor;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoplayer', { videoId: props.videoId, title: props.title })}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginBottom: 0 }}>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={{ width: "45%", height: 100 }}
                />
                <View style={{ marginLeft: 15 }}>
                    <Text
                        style={{ fontSize: 18, color: textColor, fontWeight: '500', width: windowWidth / 2 }}
                        ellipsizeMode="tail"
                        numberOfLines={3}
                    >
                        {props.title}
                    </Text>
                    <Text
                        style={{ fontSize: 16, color: textColor }}
                    >
                        {props.channel}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default MiniCard;
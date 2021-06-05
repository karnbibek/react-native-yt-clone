import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Card = ({ videoId, title, channel }) => {
    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();

    const {colors} = useTheme();
    const textColor = colors.iconColor;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoplayer', { videoId, title })}>
            <View style={{ marginBottom: 25 }}>
                <Image source={{ uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }} style={{ width: '100%', height: 200 }} />

                <View style={{ flexDirection: 'row', marginTop: 7, marginHorizontal: 10, justifyContent: 'space-between' }}>
                    <MaterialIcons name="account-circle" size={50} color="red" style={{ marginTop: 2 }} />
                    <View style={{ marginLeft: 4 }}>
                        <Text style={{ fontSize: 21, color: textColor, fontWeight: '700', width: windowWidth - 100 }} ellipsizeMode="tail" numberOfLines={2}>{title}</Text>
                        <Text style={{ fontSize: 19, color: textColor }}>{channel}</Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={24} color="#212121" style={{ marginTop: 2 }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Card;
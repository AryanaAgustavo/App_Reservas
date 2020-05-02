import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }) {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSport() {
            const response = await api.get('/spots', {
                params: { tech }
            })

            setSpots(response.data);
        }

        loadSpost();

    }, [])


    return (
        <View style={styles.container}>
            <Text style={title}>
                Empresas que usam
                <Text style={styles.bold}>{tech}</Text>
            </Text>

            <FlatList style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={style.thumbnail} source={{ uri: item.thumbnail_url }} > </Image>
                    </View> 
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    bold: {
        fontWeight: 'bold'
    },
    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2
    }
})
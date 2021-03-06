import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, AsyncStorage, Text, 
    Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png'

import SpotList from '../components/SpotList';


export default function List(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs;

            setTechs(techsArray);
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>

            {/* {techs.map( tech => <SpotList key={tech} tech={tech}/>)} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },
})
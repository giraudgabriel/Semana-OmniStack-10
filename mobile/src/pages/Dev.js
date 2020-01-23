import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import api from '../services/api';
import Toast from 'react-native-tiny-toast'

function Dev({navigation}) {
    const [github_username,
        setGithubUsername] = useState('');
    const [techs,
        setTechs] = useState('');

    const {latitude, longitude} = navigation.getParam('currentRegion');

    async function handleSubmit() {
        if (github_username && techs) {
            const dev = await api.post('./devs', {github_username, techs, latitude, longitude});
            if (dev != null) {
                Toast.showSuccess('Cadastrado com sucesso!');
                navigation.navigate('Main', {});
            }
            setGithubUsername('');
            setTechs('');
        } else {
            Toast.show('Preencha os campos vazios!');
        }
    }

    async function searchUser() {
        return;
    }

    return (
        <View>
            <TextInput
                style={styles.systemInput}
                placeholder="Usuário do Github"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                onBlur={searchUser}
                value={github_username}
                onChangeText={setGithubUsername}/>
            <TextInput
                style={styles.systemInput}
                placeholder="Tecnologias (Ex: Node.js, React Native)"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={techs}
                onChangeText={setTechs}/>
            <TouchableOpacity  onPress={handleSubmit} style={styles.saveButton}>
                <MaterialIcons name="save" size={20} color="#FFF"></MaterialIcons>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    systemInput: {
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    saveButton: {
        width: 'auto',
        height: 50,
        top:400,
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 20,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Dev;
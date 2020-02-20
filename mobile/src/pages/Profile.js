import React from 'react';
import {WebView} from "react-native-webview";
import {Text, View, StyleSheet} from 'react-native';

function Profile({navigation}) {
    const githubUsername = navigation.getParam('github_username');

    return (
        <View style={styles.container}>
            <Text>Test</Text>
            <WebView
                source={{
                uri: `https://github.com/${githubUsername}`
            }}/>
        </View>
    // <WebView     style={{     flex: 1 }}     source={{     uri:
    // `https://github.com/${githubUsername}` }}></WebView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //   paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8
    }
});

export default Profile;

import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas de destino
import Header from './header';
import Body from './body';
import Login from './login';
import Footer from './footer';
import LoginSuccessScreen from './LoginSuccess';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header />

                <View style={styles.Body}>
                <Body />

                </View>

                <View style={styles.Footer}>
                <Footer />

                </View>
                
            </View>
        </View>
    );
}

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header />
                <Login />
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Body: {
        marginTop: 10,
        justifyContent: 'center',
        objectFit: 'cover',
    },
});

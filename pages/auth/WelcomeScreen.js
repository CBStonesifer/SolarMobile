import * as React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';


export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.top} />
            <View style={styles.middle}>
                
                <Button title="Sign Up"></Button>
                <Button title="Log In" onPress={() => {
                navigation.navigate('Login');
                }}></Button>
                </View>
            <View style={styles.bottom} />
        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    top: {
      flex: 0.1,
      backgroundColor: 'grey',
      
    },
    middle: {
      flex: 0.8,
      backgroundColor: 'beige',
      justifyContent:'center',
      alignItems:'center',
    },
    bottom: {
      flex: 0.1,
      backgroundColor: 'pink',
    },
  });
  
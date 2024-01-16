import * as React from 'react';
import { Button, View, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Button title="Back" onPress={() => {
                navigation.navigate('Welcome')}}></Button>
            </View>
            <View style={styles.middle}>
                <TextInput></TextInput>
                <Button title="Log In"></Button>
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
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems:'left',
    },
    middle: {
      flex: 0.8,
      backgroundColor: 'beige',
      justifyContent:'center',
      alignItems:'center',
    },
    bottom: {
      flex: 0.1,
      backgroundColor: 'purple',
    },
  });
  
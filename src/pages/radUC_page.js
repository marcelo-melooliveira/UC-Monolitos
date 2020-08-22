import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';


export default class radUC_page extends Component{
  static navigationOptions = {
    title: 'RAD',
    headerStyle: {
      backgroundColor: '#00008B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign:'center'
      },
  };
  render() {
    return (
        <View style={styles.container}>

        <Text>Página RAD</Text>
        
        </View>
        );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1E90FF',
      paddingVertical:20
    },
  
    container_dentro: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0FFFF',
      borderRadius: 4,
      paddingTop:5,
      paddingVertical:3
      
      
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
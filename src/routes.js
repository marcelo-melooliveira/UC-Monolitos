import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, NavigationActions} from 'react-navigation';
import inicial_page from './pages/inicial_page';
import infoUC_page from './pages/infoUC_page';
import animaisUC_page from './pages/animaisUC_page';
import radUC_page from './pages/radUC_page';
import trilhasUC_page from './pages/trilhasUC_page';
import floraUC_page from './pages/floraUC_page';
import questionario_page from './pages/Questionario_page';
import resultado_page from './pages/Resultado_page';
import destinos from './pages/destinos';

const MyStackNavigator = createStackNavigator({
    inicial_page: {screen: inicial_page},
    infoUC_page: {screen: infoUC_page},
    animaisUC_page: {screen: animaisUC_page},
    radUC_page: {screen: radUC_page},
    trilhasUC_page: {screen: trilhasUC_page},
    floraUC_page: {screen: floraUC_page},
    questionario_page: {screen: questionario_page},
    resultado_page: {screen: resultado_page},
    destinos: {screen: destinos},
   
  })
  
  export default class MyApp extends React.Component{
      render(){
            return ( <MyStackNavigator/>);
      }
      
  }
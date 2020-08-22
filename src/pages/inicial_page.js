import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, TouchableWithoutFeedback} from 'react-native';
import Modal from "react-native-modal";

export default class inicial_page extends Component{

    static navigationOptions = {
        title: ' UC MONA Monólitos de Quixadá',
        headerStyle: {
          backgroundColor: '#00008B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:'center'
          },
      };

      constructor() {
        super();
        this.state = {
         isModalVisible: 0,
        }

      }
    


  render() {
    return (

      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

    

      <View style={{paddingTop:10}}>

      <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('infoUC_page')}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 300, height: 190, borderRadius:3}}
                source={require('../imgs/galinha.png')}
                />
                <Text style={styles.welcome}>UC dos Monólitos</Text>
                <Text style={styles.instructions}>Clique para ver informações sobre a UC!</Text>
            </View>
        </TouchableWithoutFeedback>
        
            
      </View>
     


      <View style={{paddingTop:10}}>
        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('animaisUC_page')}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 300, height: 250, borderRadius:3}}
                source={require('../imgs/carasuja.png')}
                 />
                 <Text style={styles.welcome}>Fauna da UC</Text>
                 <Text style={styles.instructions}>Clique para ver informações sobre a fauna!</Text>
            </View>
        </TouchableWithoutFeedback>
           
      </View>


      <View style={{paddingTop:10}}>
        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('floraUC_page')}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 300, height: 250, borderRadius:3}}
                source={require('../imgs/flora.jpg')}
                 />
                 <Text style={styles.welcome}>Flora da UC</Text>
                 <Text style={styles.instructions}>Clique para ver informações sobre a flora!</Text>
            </View>
        </TouchableWithoutFeedback>
           
      </View>


      <View style={{paddingTop:10}}>
        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('trilhasUC_page')}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 200, height: 200, borderRadius:3}}
                source={require('../imgs/trilhas.png')}
                />
                 <Text style={styles.welcome}>Trilhas</Text>
                 <Text style={styles.instructions}>Clique para ver as trilhas na UC!</Text>
            </View>
        </TouchableWithoutFeedback>
            
      </View>


      <View style={{paddingTop:10}}>
        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('questionario_page')}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 220, height: 220, borderRadius:3}}
                source={require('../imgs/iconeApp2.png')}
                />
                <Text style={styles.welcome}>Recuperação de áreas degradadas</Text>
                <Text style={styles.instructions}>Veja como recuperar áreas degradadas!</Text>
            </View>
        </TouchableWithoutFeedback>
            
      </View>


      <View style={{paddingTop:10}}>
        <TouchableWithoutFeedback onPress={() => {this.setState({isModalVisible: 1})}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 70, height: 70, borderRadius:3}}
                source={require('../imgs/info.png')}
                />
                <Text style={styles.welcome}>Informações do App</Text>
                <Text style={styles.instructions}>Veja informações sobre o App!</Text>
            </View>
        </TouchableWithoutFeedback>
            
      </View>
      
      
      </ScrollView>

      <Modal style={{justifyContent:'center', alignItems:'center'}} isVisible={this.state.isModalVisible==1}>
<View style={{width:'100%',height:'100%', backgroundColor:'#FFFFFF', borderRadius:4}}>
   
    <TouchableOpacity style={{width:'100%', height:50,alignItems:'flex-end', paddingRight:5, paddingTop:3, borderRadius:4}}
    onPress = {() => {this.setState({ isModalVisible: 0 })}}
    >
          <Image
          style={{width: 40, height: 40, borderRadius:3}}
          source={require('../imgs/fechar.png')}
          />
    </TouchableOpacity>

    <View style={{padding:3}}>
    <Text>Aplicativo desenvolvido no Laboratório de Estudos Ecológicos do Bioma Caatinga (LEEABC) - IFCE campus Quixadá, tendo como base o App SisRad (LEEABC)</Text>
    <Text style={{fontWeight:'bold'}}>Fontes:</Text>
    <Text> - Revisão e Atualização do Plano de Manejo e Definição da Zona de Amortecimento da Unidade de Conservação de Proteção IntegralMonumento Natural Os Monólitos de Quixadá - Ecossistema Consultoria Ambiental</Text>
    <Text> - https://www.wikiaves.com.br/</Text>
    <Text> - https://www.embrapa.br/</Text>
    
    
    </View>
  
  
 
  
  </View>  

</Modal>
        
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

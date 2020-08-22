import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, AsyncStorage, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation'; 
import Modal from "react-native-modal";
import data from '../textos_metodosrecup.json';
import {Accordion } from "native-base";



class Resultado_page extends Component {

    static navigationOptions = {
        title: 'RELATÓRIO',
        header: null,
        headerStyle: {
          backgroundColor: '#00008B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };

      constructor() {
        super();
        this.state = {
         Dados: [],
         auxtexto:[],
         isModalVisible: 0,
        }

      }

      componentDidMount(){

  


        this.setState({auxtexto: data[0].data.texto0});
        //console.log(data2);
        //console.log(data2.nomes[0][0]);
      }

       saveinfo = async Informacoes => {
        try {
          await AsyncStorage.setItem('ProjetosData', JSON.stringify(Informacoes));
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      };

     async getinfo (){
        let aux = [];
        try {
          aux = await AsyncStorage.getItem('ProjetosData') || null;
          let parse = JSON.parse(aux);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
        return parse;
      }


      deleteinfo = async () => {
        try {
          await AsyncStorage.removeItem('ProjetosData');
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      }
      
        
   salvarDados = async () =>{

   
    let auxiliar = [];
    
    auxiliar.push(this.props.Dados_propriedade);
    auxiliar.push(this.props.Dados_Questionario);
    auxiliar.push(this.props.Dados_degradacao);
    auxiliar.push(this.props.Metodo_recuperacao);

    //console.log('VALOR SALVo NO ASYNC pego PELA FUNÇÃO GETINFO!!!!!!!!!!!');
    let user = await AsyncStorage.getItem('ProjetosData');
    let parsed = JSON.parse(user);
   // console.log(parsed);

    //console.log('ARRAY FINAL!!!!!!!!!!!');
    //console.log(auxiliar);

    if(parsed == null){
      parsed = [auxiliar];
      
    }else{
      parsed.push(auxiliar);
    }
    

    //console.log('ARRAY parse com push!!!!!!!!!!!');
    //console.log(parsed);

    this.saveinfo(parsed);

    this.navigateToWalkthrough();

    
    
    
   }

   navigateToWalkthrough () {
    const navigateAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "inicial_page" })],
    });
  
    this.props.navigation.dispatch(navigateAction);
  }

  

    displayData = () => {

      

      /*
        try{
            let user = await AsyncStorage.getItem('ProjetosData');
            let parsed = JSON.parse(user);

            console.log('VALOR PEGO NO ASYNCSTORAGE!!!!!!!!!!!');
            console.log(parsed);
        }
        catch (error){
            alert(error);
        }
        */
    }


    

  render() {
    if(this.props.Dados_propriedade[0] == null){

      return (
        <ScrollView style={styles.container}>
  
      
        <View style={styles.barraheader}>
            <Text style={styles.textoheader}>RELATÓRIO</Text>
        </View>
  
        <View style={{padding: 5}}>
           
                     <View
                     style={{
                       //flex: 1,
                      // flexDirection: 'column',
                     //  alignItems: 'center',
                      // justifyContent: 'center',
                       paddingBottom: 10,
                       borderRadius: 10,
                       backgroundColor: '#fff'
                     }}>
  
                    <View style={styles.barraheader2}>
                        <Text style={styles.textoheader}>Dados de degradação da UC</Text>
                    </View>

                    
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[0]}</Text>
                    <Text style={styles.textodados_info}>ISOLAMENTO DOS FATORES DE DEGRADAÇÃO: {this.props.Dados_degradacao}</Text>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[1]}</Text>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[2]}</Text>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[3]}</Text>
                   
                    
                    <Text style={styles.textodados}>Método de recuperação: {this.props.Metodo_recuperacao}</Text>

                    
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => this.setState({isModalVisible:1})}>
                          <Image
                      style={{width: 60, height: 60, borderRadius:3}}
                      source={require('../imgs/interrogacao.png')}
                      />
                    </TouchableOpacity>
                    
                    
                    
  
                     </View>

                     <View style={{flexDirection: 'row'}}>
                       
                        <View style={{flex:1, paddingTop:15}} >
                            <Button title="Finalizar" onPress={() => this.navigateToWalkthrough()}></Button>
                        </View>

                    
                    </View>
                     
  
                 </View> 
                 
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
            
            
            
            <ScrollView>
                    <Accordion dataArray={this.state.auxtexto}
                      headerStyle={{ backgroundColor: "#b7daf8" }}
                      contentStyle={{ backgroundColor: "#ddecf8" }}
                    />
                    </ScrollView>
      
      
      
  
  </View>  

</Modal>
        </ScrollView>
      );
      
    }

    /*
    return (
      <ScrollView style={styles.container}>

    
      <View style={styles.barraheader}>
          <Text style={styles.textoheader}>Relatório de projeto</Text>
      </View>

      <View style={{padding: 5}}>
       <View
                   style={{
                     //flex: 1,
                    // flexDirection: 'column',
                   //  alignItems: 'center',
                    // justifyContent: 'center',
                     paddingBottom: 10,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>

                  <View style={styles.barraheader2}>
                      <Text style={styles.textoheader}>Dados da propriedade</Text>
                  </View>
                  <Text style={styles.textodados}>Nome do proprietário: {this.props.Dados_propriedade[7]}</Text>
                  <Text style={styles.textodados}>Local: {this.props.Dados_propriedade[1]}/{this.props.Dados_propriedade[0]}</Text>
                  <Text style={styles.textodados}>Área: {this.props.Dados_propriedade[2]} ha</Text>
                  <Text style={styles.textodados}>Descrição da área: {this.props.Dados_propriedade[3]}</Text>
                  <Text style={styles.textodados}>Responsável técnico: {this.props.Dados_propriedade[4]}</Text>

                   </View>


                <View style={{padding: 5}}>

                   <View
                     style={{
                       //flex: 1,
                      // flexDirection: 'column',
                     //  alignItems: 'center',
                      // justifyContent: 'center',
                       paddingBottom: 10,
                       borderRadius: 10,
                       backgroundColor: '#fff'
                     }}>
  
                    <View style={styles.barraheader2}>
                        <Text style={styles.textoheader}>Dados de degradação da área</Text>
                    </View>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[0]}</Text>
                    <Text style={styles.textodados_info}>ISOLAMENTO DOS FATORES DE DEGRADAÇÃO: {this.props.Dados_degradacao}</Text>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[1]}</Text>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[2]}</Text>
                    <Text style={styles.textodados}>{this.props.Dados_Questionario[3]}</Text>
                    

                     <Text style={styles.textodados}>Metodo de recuperação: {this.props.Metodo_recuperacao}</Text>
                    
  
                     </View>
                </View>
                
                    

               </View> 
               
               <View style={{ width:'90%', height:'50',flexDirection: 'row', backgroundColor:'#FFFFFF'}}>
                        <View style={{flex:1, paddingTop:15}} >
                            <Button title="Salvar2" onPress={this.salvarDados}></Button>
                        </View>
                        <View style={{flex:1, paddingTop:15}} >
                            <Button title="Cancelar" onPress={() => this.navigateToWalkthrough()}></Button>
                        </View>

                        
                    </View>
      </ScrollView>
    ); */
  }
}

mapStateToProps = state =>(
    {
        Dados_propriedade: state.AutenticacaoReducer.dados_propriedade,
        Dados_Questionario: state.AutenticacaoReducer.dados_propriedade2,
        Dados_degradacao: state.AutenticacaoReducer.degradacao,
        Metodo_recuperacao: state.AutenticacaoReducer.recuperacao,
       
        
    }
  )

export default connect( mapStateToProps, null)(Resultado_page)

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#1E90FF',
        },
            barraheader: {
            width:'100%', 
            height:50,
            flexDirection:'row',
            backgroundColor:'#00008B', 
            paddingLeft:10, 
            alignItems:'center'
                        },
           barraheader2: {
           width:'100%', 
           height:50,
          flexDirection:'row',
          backgroundColor:'#00008B', 
          paddingLeft:5,
          borderTopStartRadius:8,
          borderTopRightRadius:8,
          alignItems:'center'
                                      },            
            textoheader:{
            fontSize:23, 
            fontWeight:'bold', 
            color:'#fff', 
            paddingLeft:10
            },
            textodados:{
              fontSize:15, 
              fontWeight:'bold', 
              color:'#000000', 
              paddingLeft:10,
              paddingVertical: 5
              },
              textodados_info:{
                fontSize:12, 
                textAlign: "justify",
                fontStyle: "italic",
                color:'#000000', 
                paddingLeft:10
                },
  });
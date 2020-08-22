import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import {dadosQuestionario, dadosdegradacao, dadosrecuperacao} from '../actions/AutenticacaoActions';

class Questionario_page extends Component {

    static navigationOptions = {
        title: 'QUESTIONÁRIO',
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
          dataquest:  [{
            "id": "0",
            "idref":"0",
           "titulo": "FATOR DE DEGRADAÇÃO NA UC",
           "obs":"Identifique o principal fator de degradação na UC.",
           "exibe": true
           },
       {
           "id":"1",
           "idref":"1.1",
           "titulo":"USO E OCUPAÇÃO",
           "obs":"Identifique o atual uso e ocupação da área na UC.",
           "exibe": false
       },
       {
           "id":"2",
           "idref":"1.2",
           "titulo":"CONDIÇÕES DO SOLO",
           "obs":"Selecione a condição do solo.",
           "exibe": false
       },
       {
           "id":"3",
           "idref":"1.3",
           "titulo":"ESTADO DE DEGRADAÇÃO DOS FRAGMENTOS NA UC",
           "obs":"Identifique o estado de fragmentação.",
           "exibe": false
       },{
        "id":"4",
        "idref":"1.3",
        "titulo":"DETALHAMENTO DO SOLO DEGRADADO",
        "obs":"Responda quanto a exposição da rocha mãe do solo da área.",
        "exibe": false
    },
    {
      "id":"5",
      "idref":"1.3",
      "titulo":"COMUNIDADE REGENERANTE E ISOLAMENTO DA ÁREA NA PAISAGEM",
      "obs":"Identificar em qual grupo se encontra a área em questão, considerando a densidade de espécies regenerantes (1), sua variabilidade (2) e também o isolamento da paisagem.",
      "obs2":"1. Classifique a densidade de espécies regenerantes.",
      "obs3":"2. Marque o grau de variabilidade de espécies regenerantes.",
      "obs4":"3. Indique o tipo de isolamento da área.",
      "exibe": false
  },
  {
    "id": "6",
    "exibe": false
  }
      ],
      dados_degradacao:["Deverão ser implantadas medidas de proteção contra incêndios buscando a conscientização do proprietário rural e dos moradores vizinhos.",
    "Retirar animais, instalar cercas de isolamento na área e suspender roçagem.",
     "Isolamento da área e impedimento do cultivo na área demarcada.",
      "Adoção de práticas de conservação do solo nas áreas ao entorno.",
      "Interrupção das atividades de remoção ou revolvimento de substrato.",
      "Programas de proteção à natureza, como campanhas de conscientização, placas de advertência e fiscalização."],
      types1: [{label: 'Incêndio', value: 1}, {label: 'Pecuária', value: 1},{label: 'Agricultura', value: 2},
      {label: 'Descarga de enxurrada', value: 1} , {label: 'Mineiração', value: 2},{label: 'Exploração predatória', value: 3}],
      
      types2: [{label: 'Área em uso', value: 1}, {label: 'Área abandonada', value: 1},
      {label: 'Remanescente florestal', value: 2}],

      types3: [{label: 'Solo não degradado', value: 1}, {label: 'Solo degradado', value: 2}],

      types4: [{label: 'Fragmentos conservados', value: 1}, {label: 'Fragmentos possíveis de restauração', value: 2},
       {label: 'Fragmentos com necessidade de restauração', value: 3}],
       
      types5: [{label: 'Sem exposição da rocha', value: 1}, {label: 'Com exposição da rocha', value: 2}],
      
      types61: [{label: 'Nula', value: 1}, {label: 'Reduzida', value: 2}, {label: 'Moderada', value: 3}, {label: 'Elevada', value: 4}],

      types62: [{label: 'Pouco', value: 1}, {label: 'Intermediário', value: 2}, {label: 'Muitos', value: 3}],

      types63: [{label: 'Área não isolada na paisagem', value: 1}, {label: 'Área isolada na paisagem', value: 2}],

      refreshing: false,
      dataredux: [],
      dataaux: [],
      metodo_Recup:""
        };
      }


     funcaorefresh(){

      if(this.state.refreshing == true){
        this.setState({refreshing: false});
    }else{
        this.setState({refreshing: true}); 
    }
     }

     salvadados(){

      var resultado = this.state.dataredux.filter(function(ele){
        return ele !== undefined;
      });

      this.props.dadosQuestionario(resultado);
      this.props.dadosrecuperacao(this.state.metodo_Recup);
     

     }



      renderItem = ({ item }) => {
       
        if (item.exibe && item.id == 0) {
          return (
            <View style={{paddingHorizontal:5, paddingVertical:10}}>
            <View
                   style={{
                     flex: 1,
                     flexDirection: 'column',
                   //  alignItems: 'center',
                     justifyContent: 'center',
                     padding: 15,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>
            
            
           
    
            <Text style={{textAlign:'center', padding: 10, fontSize:25, fontWeight:'bold'}}>{item.titulo}</Text> 
            <Text></Text>
       
        <Text>{item.obs}</Text>

       <View style={{}}>
       <RadioForm
              ref="radioForm"
              radio_props={this.state.types1}
              initial={-1}
              buttonSize={15}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
               // this.setState({
                //  value1:value,
                 // value1Index:index
                //})
                this.props.dadosdegradacao(this.state.dados_degradacao[index]);

                let aux = `${item.titulo} : ${this.state.types1[index].label}`;
                this.state.dataredux[0] = aux;
                //alert(this.state.dataredux[0]);
                if(value == 1){
                  this.state.dataquest[1].exibe = true;
                  this.state.dataquest[2].exibe = false;
                  this.state.dataquest[3].exibe = false;

                }
                if(value == 2){
                  this.state.dataquest[1].exibe = false;
                  this.state.dataquest[2].exibe = true;
                  this.state.dataquest[3].exibe = false;
                }
                if(value == 3){
                  this.state.dataquest[1].exibe = false;
                  this.state.dataquest[2].exibe = false;
                  this.state.dataquest[3].exibe = true;
                }
                this.funcaorefresh();
                
              }}
            />
            
          </View>
        </View>
       </View>
          );
        } 





        if (item.exibe && item.id == 1) {
          return (
            <View style={{paddingHorizontal:5, paddingVertical:10}}>
            <View
                   style={{
                     flex: 1,
                     flexDirection: 'column',
                   //  alignItems: 'center',
                     justifyContent: 'center',
                     padding: 15,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>
            
            
           
    
            <Text style={{textAlign:'center', padding: 10, fontSize:25, fontWeight:'bold'}}>{item.titulo}</Text> 
            <Text></Text>
       
        <Text>{item.obs}</Text>

       <View style={{}}>
       <RadioForm
              ref="radioForm"
              radio_props={this.state.types2}
              initial={-1}
              buttonSize={15}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
               // this.setState({
                //  value1:value,
                 // value1Index:index
                //})

                let aux = `${item.titulo} : ${this.state.types2[index].label}`;
                this.state.dataredux[1] = aux;
                //alert(this.state.dataredux[1]);
              
              if(value == 1){
                this.state.dataquest[2].exibe = true;
                this.state.dataquest[3].exibe = false;
              }

              if(value == 2){
                this.state.dataquest[2].exibe = false;
                this.state.dataquest[3].exibe = true;
              }

              this.funcaorefresh();
                
              }}
            />
            
          </View>
        </View>
       </View>
          );
        } 




        if (item.exibe && item.id == 2) {
          return (
            <View style={{paddingHorizontal:5, paddingVertical:10}}>
            <View
                   style={{
                     flex: 1,
                     flexDirection: 'column',
                   //  alignItems: 'center',
                     justifyContent: 'center',
                     padding: 15,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>
            
            
           
    
            <Text style={{textAlign:'center', padding: 10, fontSize:25, fontWeight:'bold'}}>{item.titulo}</Text> 
            <Text></Text>
       
        <Text>{item.obs}</Text>

       <View style={{}}>
       <RadioForm
              ref="radioForm"
              radio_props={this.state.types3}
              initial={-1}
              buttonSize={15}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
               // this.setState({
                //  value1:value,
                 // value1Index:index
                //})
                let aux = `${item.titulo} : ${this.state.types3[index].label}`;
                this.state.dataredux[2] = aux;
               // alert(this.state.dataredux[2]);
                
              if(value == 1){
               
                this.state.dataquest[5].exibe = true;
                this.state.dataquest[4].exibe = false;
              }

              if(value == 2){
                
                this.state.dataquest[4].exibe = true;
                this.state.dataquest[5].exibe = false;
              }
               
                this.funcaorefresh();
                
              }}
            />
            
          </View>
        </View>
       </View>
          );
        }



        if (item.exibe && item.id == 3) {
          return (
            <View style={{paddingHorizontal:5, paddingVertical:10}}>
            <View
                   style={{
                     flex: 1,
                     flexDirection: 'column',
                   //  alignItems: 'center',
                     justifyContent: 'center',
                     padding: 15,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>
            
            
           
    
            <Text style={{textAlign:'center', padding: 10, fontSize:20, fontWeight:'bold'}}>{item.titulo}</Text> 
            <Text></Text>
       
        <Text>{item.obs}</Text>

       <View style={{}}>
       <RadioForm
              ref="radioForm"
              radio_props={this.state.types4}
              initial={-1}
              buttonSize={15}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
               // this.setState({
                //  value1:value,
                 // value1Index:index
                //})
                if(value == 1){
                  this.state.metodo_Recup = "Ampliação do papel de conservação da biodiversidade.";
                }

                if(value == 2){
                  this.state.metodo_Recup = "Ampliação do papel de conservação da biodiversidade e aceleração da sucessão secundária.";
                }

                if(value == 3){
                  this.state.metodo_Recup = "Ampliação do papel de conservação da biodiversidade e restauração de fragmentos degradados.";
                }
                let aux = `${item.titulo} : ${this.state.types4[index].label}`;
                this.state.dataredux[3] = aux;
               //alert(this.state.dataredux[3]);
               this.state.dataquest[6].exibe = true;
                this.funcaorefresh();
                
              }}
            />
            
          </View>
        </View>
       </View>
          );
        }




        if (item.exibe && item.id == 4) {
          return (
            <View style={{paddingHorizontal:5, paddingVertical:10}}>
            <View
                   style={{
                     flex: 1,
                     flexDirection: 'column',
                   //  alignItems: 'center',
                     justifyContent: 'center',
                     padding: 15,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>
            
            
           
    
            <Text style={{textAlign:'center', padding: 10, fontSize:20, fontWeight:'bold'}}>{item.titulo}</Text> 
            <Text></Text>
       
        <Text>{item.obs}</Text>

       <View style={{}}>
       <RadioForm
              ref="radioForm"
              radio_props={this.state.types5}
              initial={-1}
              buttonSize={15}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
               // this.setState({
                //  value1:value,
                 // value1Index:index
                //})
                if(value == 1){
                  this.state.metodo_Recup = "\n-Aração e/ou drenagem e/ou subsolagem \n-Implantação de zona-tampão \n-Transposição de serapilheira e banco de sementes \n-Plantio em área total\n";
                }

                if(value == 2){
                  this.state.metodo_Recup = "\n-Transferência de subsolo\n-Adubação verde\n-Transposição de serapilheira e banco de sementes\n-Plantio em área total\n-Implantação de zona-tampão\n";
                }

                let aux = `${item.titulo} : ${this.state.types5[index].label}`;
                this.state.dataredux[4] = aux;
              // alert(this.state.dataredux[4]);
               
              this.state.dataquest[6].exibe = true;
                this.funcaorefresh();
                
              }}
            />
            
          </View>
        </View>
       </View>
          );
        }






        
        if (item.exibe && item.id == 5) {
          return (
            <View style={{paddingHorizontal:5, paddingVertical:10}}>
            <View
                   style={{
                     flex: 1,
                     flexDirection: 'column',
                   //  alignItems: 'center',
                     justifyContent: 'center',
                     padding: 15,
                     borderRadius: 10,
                     backgroundColor: '#fff'
                   }}>
            
            
           
    
            <Text style={{textAlign:'center', padding: 10, fontSize:20, fontWeight:'bold'}}>{item.titulo}</Text> 
            <Text></Text>
       
        <Text>{item.obs}</Text>
       


        <View style={{paddingVertical:15}}>
        <Text>{item.obs2}</Text>
       <RadioForm
              ref="radioForm"
              radio_props={this.state.types61}
              initial={-1}
              buttonSize={15}
              formHorizontal={true}
              labelHorizontal={false}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
               
                this.state.dataaux[0] = value;
               
                this.funcaorefresh();
                
              }}
            /> 

            <Text>{item.obs3}</Text>
              <View style={{paddingVertical:15}}>
                <RadioForm
              ref="radioForm"
              radio_props={this.state.types62}
              initial={-1}
              buttonSize={15}
              formHorizontal={true}
              labelHorizontal={false}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              //buttonStyle={margin}
              onPress={(value, index) => {

                this.state.dataaux[1] = value;
               
                this.funcaorefresh();
                
              }}
            />
            </View>

              <Text>{item.obs4}</Text>
              
              <View style={{paddingVertical:15}}>
              <RadioForm
              ref="radioForm"
              radio_props={this.state.types63}
              initial={-1}
              buttonSize={15}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
                this.state.dataaux[2] = value;

                if(this.state.dataaux[0] == 4 && this.state.dataaux[1] == 3 && this.state.dataaux[2] == 1 ){
                  let aux = `${item.titulo} : Elevada densidade de muitas variedades de espécies regenerantes em área não isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);

                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas.";

                }

                 else if(this.state.dataaux[0] == 4 && this.state.dataaux[1] == 3 && this.state.dataaux[2] == 2 ){
                  let aux = `${item.titulo} : Elevada densidade de muitas variedades de espécies regenerantes em área isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas.";

                }

               else if(this.state.dataaux[0] == 4 && (this.state.dataaux[1] == 2 || this.state.dataaux[1] == 1) && this.state.dataaux[2] == 1 ){
                  let aux = `${item.titulo} : Elevada densidade de poucas variedades de espécies regenerantes em área não isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                 // alert(this.state.dataredux[5]);
                 this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas e enriquecimento.";
                }

               else if(this.state.dataaux[0] == 4 && (this.state.dataaux[1] == 2 || this.state.dataaux[1] == 1) && this.state.dataaux[2] == 2 ){
                  let aux = `${item.titulo} : Elevada densidade de poucas variedades de espécies regenerantes em área isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas e adensamento.";
                }

               else if(this.state.dataaux[0] == 3 && this.state.dataaux[1] == 3 && this.state.dataaux[2] == 1 ){
                  let aux = `${item.titulo} : Moderada densidade de muitas espécies regenerantes, em área não isolada na paisagem.`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas, adensamento e enriquecimento.";
                }

                else if(this.state.dataaux[0] == 3 && this.state.dataaux[1] == 3 && this.state.dataaux[2] == 2 ){
                  let aux = `${item.titulo} : Moderada densidade de muitas variedades de espécies regenerantes em área isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas, adensamento e enriquecimento.";
                }

                else if(this.state.dataaux[0] == 3 && (this.state.dataaux[1] == 2|| this.state.dataaux[1] == 1) && this.state.dataaux[2] == 1 ){
                  let aux = `${item.titulo} : Moderada densidade de poucas/intermediárias variedades de espécies regenerantes em área não isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas, adensamento e enriquecimento.";
                }


                else if(this.state.dataaux[0] == 3 && (this.state.dataaux[1] == 2|| this.state.dataaux[1] == 1) && this.state.dataaux[2] == 2 ){
                  let aux = `${item.titulo} : Moderada densidade de poucas/intermediárias variedades de espécies regenerantes em área isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Favorecimento da revegetação natural de espécies nativas, adensamento e enriquecimento.";
                }

               else if((this.state.dataaux[0] == 1 || this.state.dataaux[0] == 2) && this.state.dataaux[2] == 1 ){
                  let aux = `${item.titulo} : Nula ou reduzida densidade de espécies regenerantes em área não isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Introdução de espécies nativas em área total SEM diversidade de espécies.";
                }

              else if((this.state.dataaux[0] == 1 || this.state.dataaux[0] == 2) && this.state.dataaux[2] == 2 ){
                  let aux = `${item.titulo} : Nula ou reduzida densidade de espécies regenerantes em área isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  //alert(this.state.dataredux[5]);
                  this.state.metodo_Recup = "Introdução de espécies nativas em área total COM diversidade de espécies.";

                }else {
                  if(this.state.dataaux[2] == 1){
                    let aux = `${item.titulo} : Nula ou reduzida densidade de espécies regenerantes em área não isolada da paisagem`;
                  this.state.dataredux[5] = aux;
                  this.state.metodo_Recup = "Introdução de espécies nativas em área total SEM diversidade de espécies.";

                  }else{
                    let aux = `${item.titulo} : Nula ou reduzida densidade de espécies regenerantes em área isolada da paisagem`;
                    this.state.dataredux[5] = aux;
                    this.state.metodo_Recup = "Introdução de espécies nativas em área total COM diversidade de espécies.";
                  }
                }
                this.state.dataquest[6].exibe = true;
                this.funcaorefresh();
               // console.log(this.state.dataredux);
                
              }}
            /></View>
            
          </View>
        </View>
       </View>
          );
        }


        if (item.exibe && item.id == 6) {
          return (
            <View style={{paddingVertical:15 ,backgroundColor: '#1E90FF', justifyContent:'center', alignItems:'center'}}>
            <Button 
            title={"        Finalizar        "} 
            onPress = {() => {this.salvadados(), this.props.navigation.navigate('resultado_page')}} />
            </View>
          );
        }

      };

  render() {
    return (
      <View style={styles.container}>

          <FlatList
        data={this.state.dataquest}
        refreshing={this.state.refreshing}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
       
      />


      </View>
    );
  }
}

export default connect( null, {dadosQuestionario, dadosdegradacao, dadosrecuperacao})(Questionario_page);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1E90FF',
    }
  });
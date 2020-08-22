import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-carousel-view';
import data from '../textos_flora.json';
import data2 from '../nomes_flora.json';
import { Container, Header, Content, Accordion } from "native-base";
import Modal from "react-native-modal";


var song = null;



export default class floraUC_page extends Component{
  static navigationOptions = {
    title: 'FLORA',
    headerStyle: {
      backgroundColor: '#00008B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign:'center'
      },
  };
  constructor(){
    super();
    this.state = {
        
       
       auxtexto:[],
       nome_popular:"popular",
       nome_cientifico:"científico",
       isModalVisible: 0,
       nome_imagem0: require('../imgs/imgs_flora/outras/0-0.jpg'),
       nome_imagem1: require('../imgs/imgs_flora/outras/0-1.jpg'),
       nome_imagem2: require('../imgs/imgs_flora/outras/0-2.jpg'),
       nome_imagem3: require('../imgs/imgs_flora/outras/0-3.jpg')
        
    }
    
}

componentDidMount(){

  


  this.setState({auxtexto: data[0].data.texto0, nome_popular: data2.nomes[0][0], nome_cientifico: data2.nomes[0][1]});
  //console.log(data2);
  //console.log(data2.nomes[0][0]);
}

mudatexto(id){
 
  this.setState({ nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});

  let aux0 ;
  let aux1 ;
  let aux2;
  let aux3 ;

  if(id==0){
    this.setState({auxtexto: data[0].data.texto0});

  aux0 = require("../imgs/imgs_flora/outras/0-0.jpg");
  aux1 = require("../imgs/imgs_flora/outras/0-1.jpg");
  aux2 = require("../imgs/imgs_flora/outras/0-2.jpg");
  aux3 = require("../imgs/imgs_flora/outras/0-3.jpg");
  }

  if(id==1){
    this.setState({auxtexto: data[0].data.texto1});

  aux0 = require("../imgs/imgs_flora/outras/1-0.jpg");
  aux1 = require("../imgs/imgs_flora/outras/1-1.jpg");
  aux2 = require("../imgs/imgs_flora/outras/1-2.jpg");
  aux3 = require("../imgs/imgs_flora/outras/1-3.jpg");
  }

  if(id==2){
    this.setState({auxtexto: data[0].data.texto2});
  aux0 = require("../imgs/imgs_flora/outras/2-0.jpg");
  aux1 = require("../imgs/imgs_flora/outras/2-1.jpg");
  aux2 = require("../imgs/imgs_flora/outras/2-2.jpg");
  aux3 = require("../imgs/imgs_flora/outras/2-3.jpg");
  }
  if(id==3){
    this.setState({auxtexto: data[0].data.texto3});
    aux0 = require("../imgs/imgs_flora/outras/3-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/3-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/3-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/3-3.jpg");
    
  }

  if(id==4){
    this.setState({auxtexto: data[0].data.texto4});
    aux0 = require("../imgs/imgs_flora/outras/40.jpg");
    aux1 = require("../imgs/imgs_flora/outras/naodisponivel.jpg");
    aux2 = require("../imgs/imgs_flora/outras/42.jpg");
    aux3 = require("../imgs/imgs_flora/outras/naodisponivel.jpg");
   
  }

  if(id==5){
    this.setState({auxtexto: data[0].data.texto5});
    aux0 = require("../imgs/imgs_flora/outras/5-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/5-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/5-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/5-3.jpg");
  }
  if(id==6){
    this.setState({auxtexto: data[0].data.texto6});
    aux0 = require("../imgs/imgs_flora/outras/6-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/6-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/6-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/6-3.jpg");
  }
  if(id==7){
    this.setState({auxtexto: data[0].data.texto7});
    aux0 = require("../imgs/imgs_flora/outras/7-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/7-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/7-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/7-3.jpg");
  }
  if(id==8){
    this.setState({auxtexto: data[0].data.texto8});
    aux0 = require("../imgs/imgs_flora/outras/8-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/8-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/8-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/8-3.jpg");
  }
  if(id==9){
    this.setState({auxtexto: data[0].data.texto9});
    aux0 = require("../imgs/imgs_flora/outras/9-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/9-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/9-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/9-3.jpg");
  }
  if(id==10){
    this.setState({auxtexto: data[0].data.texto10});
    aux0 = require("../imgs/imgs_flora/outras/10-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/10-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/10-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/10-3.jpg");
  }
  if(id==11){
    this.setState({auxtexto: data[0].data.texto11});
    aux0 = require("../imgs/imgs_flora/outras/11-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/11-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/11-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/11-3.jpg");
  }
  if(id==12){
    this.setState({auxtexto: data[0].data.texto12});
    aux0 = require("../imgs/imgs_flora/outras/12-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/12-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/12-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/12-3.jpg");
  }
  if(id==13){
    this.setState({auxtexto: data[0].data.texto13});
    aux0 = require("../imgs/imgs_flora/outras/13-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/13-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/13-02.jpg");
    aux3 = require("../imgs/imgs_flora/outras/13-3.jpg");
  }
  if(id==14){
    this.setState({auxtexto: data[0].data.texto14});
    aux0 = require("../imgs/imgs_flora/outras/14-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/14-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/14-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/14-3.jpg");
  }
  if(id==15){
    this.setState({auxtexto: data[0].data.texto15});
    aux0 = require("../imgs/imgs_flora/outras/15-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/15-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/15-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/15-3.jpg");
  }
  if(id==16){
    this.setState({auxtexto: data[0].data.texto16});
    aux0 = require("../imgs/imgs_flora/outras/16-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/16-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/16-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/16-3.jpg");
  }
  if(id==17){
    this.setState({auxtexto: data[0].data.texto17});
    aux0 = require("../imgs/imgs_flora/outras/17-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/17-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/17-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/17-3.jpg");
  }
  if(id==18){
    this.setState({auxtexto: data[0].data.texto18});
    aux0 = require("../imgs/imgs_flora/outras/18-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/18-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/18-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/18-3.jpg");
  }
  if(id==19){
    this.setState({auxtexto: data[0].data.texto19});
    aux0 = require("../imgs/imgs_flora/outras/19-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/19-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/19-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/19-3.jpg");
  }
  if(id==20){
    this.setState({auxtexto: data[0].data.texto20});
    aux0 = require("../imgs/imgs_flora/outras/20-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/20-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/naodisponivel.jpg");
    aux3 = require("../imgs/imgs_flora/outras/20-3.jpg");

    
  }
  if(id==21){
    this.setState({auxtexto: data[0].data.texto21});
    aux0 = require("../imgs/imgs_flora/outras/21-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/21-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/21-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/21-3.jpg");
  }
  if(id==22){
    this.setState({auxtexto: data[0].data.texto22});
    aux0 = require("../imgs/imgs_flora/outras/22-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/22-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/22-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/22-3.jpg");
  }
  if(id==23){
    this.setState({auxtexto: data[0].data.texto23});
    aux0 = require("../imgs/imgs_flora/outras/23-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/23-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/23-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/23-3.jpg");
  }

  if(id==24){
    this.setState({auxtexto: data[0].data.texto24});
    aux0 = require("../imgs/imgs_flora/outras/24-0.jpg");
    aux1 = require("../imgs/imgs_flora/outras/24-3.jpg");
    aux2 = require("../imgs/imgs_flora/outras/24-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/24-1.jpg");
  }

  if(id==25){
    this.setState({auxtexto: data[0].data.texto25});
    aux0 = require("../imgs/imgs_flora/outras/naodisponivel.jpg");
    aux1 = require("../imgs/imgs_flora/outras/25-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/25-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/25-3.jpg");
  }

  if(id==26){
    this.setState({auxtexto: data[0].data.texto26});
    aux0 = require("../imgs/imgs_flora/outras/naodisponivel.jpg");
    aux1 = require("../imgs/imgs_flora/outras/26-1.jpg");
    aux2 = require("../imgs/imgs_flora/outras/26-2.jpg");
    aux3 = require("../imgs/imgs_flora/outras/26-3.jpg");
  }

  
 
 


this.setState({nome_imagem0: aux0, nome_imagem1:aux1, nome_imagem2:aux2, nome_imagem3:aux3});

}





  render() {
    return (
      <View style={{
        flex: 1,
        //justifyContent: 'center',
        backgroundColor:'#1E90DD',
        paddingTop:3
        
      }}>

      <View style={{alignItems:'center'}}>

      <View style={{paddingHorizontal:5, justifyContent:'center', alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>{this.state.nome_popular}</Text>
      <Text style={{fontSize:15,fontStyle:'italic', color:"#FFFFFF"}}>({this.state.nome_cientifico})</Text>
      
      </View>

      <Carousel
      width={250}
      height={260}
      hideIndicators={true}
      animate={false}
      indicatorAtBottom={false}
      indicatorSize={15}
      indicatorText="✽"
      indicatorColor="#00008B"
      onPageChange={(number) =>{this.mudatexto(number)}}
      >

      

      <View style={styles.contentContainer}>

     
        <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/juremapreta.jpg')}
          />

          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
      <Image
      style={{width: 250, height: 200, borderRadius:3}}
      source={require('../imgs/imgs_flora/juca.jpeg')}
      />
      </TouchableWithoutFeedback>
        

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>

        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/mufumbo.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
      <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/paubranco.jpg')}
          />
      </TouchableWithoutFeedback>
        

      </View>

      <View style={styles.contentContainer}>

      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
      <Image
        style={{width: 250, height: 250, borderRadius:3}}
        source={require('../imgs/imgs_flora/marmel.jpg')}
        />
      </TouchableWithoutFeedback>
      

    </View>
      

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/sabia.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/aroeira.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/cajazeira.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/catingueira.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/pereiro.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/iperoxo.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/barriguda.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/patadevaca.jpeg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 200, height: 250, borderRadius:3}}
          source={require('../imgs/imgs_flora/mutamba.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/oiticica.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>


      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/juazeiro.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 280, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/tamboril.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/inga.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/juremabranca.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/sabonete.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 160, height: 220, borderRadius:3}}
          source={require('../imgs/imgs_flora/carnauba.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/angico.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/ipeamarelo.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/jatoba.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/freijo.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 200, height: 250, borderRadius:3}}
          source={require('../imgs/imgs_flora/mandacaru.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>

      <View style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible:1})}}>
        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_flora/xiquexique.jpg')}
          />
          </TouchableWithoutFeedback>

      </View>
  

     
    </Carousel>
      
      
      
      </View>
       
          

          
          <View style={styles.contentContainer2}>

          <ScrollView>
          <Accordion dataArray={this.state.auxtexto}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
          </ScrollView>
          
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

                    <View style={{alignItems:'center', justifyContent:'center', paddingVertical:8}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Folha {this.state.nome_imagem}</Text>
                        <Image
                        style={{width: 200, height: 200, borderRadius:3, paddingVertical:10}}
                        source={this.state.nome_imagem0}
                        />
                    </View>


                    <View style={{alignItems:'center', justifyContent:'center', paddingVertical:8}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Semente</Text>
                        <Image
                        style={{width: 200, height: 200, borderRadius:3, paddingVertical:10}}
                        source={this.state.nome_imagem1}
                        />
                    </View>


                  <View style={{alignItems:'center', justifyContent:'center', paddingVertical:8}}>
                      <Text style={{fontSize:20, fontWeight:'bold'}}>Flor</Text>
                      <Image
                      style={{width: 200, height: 200, borderRadius:3, paddingVertical:10}}
                      source={this.state.nome_imagem2}
                      />
                  </View>


                <View style={{alignItems:'center', justifyContent:'center', paddingVertical:8}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Fruto</Text>
                    <Image
                    style={{width: 200, height: 200, borderRadius:3, paddingVertical:10}}
                    source={this.state.nome_imagem3}
                    />
                </View>

                   
                    
                   
                    </ScrollView>
                  
              
              </View>

              
      
          </Modal> 
        
      </View>

      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  contentContainer: {
    backgroundColor:'#1E90DD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer2: {
    borderWidth: 2,
    borderColor: '#1E90FF',
    backgroundColor:'#1E90DD',
    flex: 1,
    
  },
});
  
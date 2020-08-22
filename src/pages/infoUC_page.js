import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Carousel from 'react-native-carousel-view';
import data from '../textos.json'
import {Accordion } from "native-base";



export default class infoUC_page extends Component{
  static navigationOptions = {
    title: 'INFORMAÇÕES DA UC',
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
        
       texto0: "texto da imagem 0",
       texto1: "texto da imagem 1",
       texto2: "texto da imagem 2",
       auxtexto:""   
    }
}

componentDidMount(){

  


  this.setState({auxtexto: data[0].data.texto0});
}

mudatexto(id){
  if(id==0){
    this.setState({auxtexto: data[0].data.texto0});
  }

  if(id==1){
    this.setState({auxtexto: data[0].data.texto1});
  }

  if(id==2){
    this.setState({auxtexto: this.state.texto2});
  }
}


  render() {
    return (
      <View style={{
        flex: 1,
        //justifyContent: 'center',
        backgroundColor:'#1E90DD',
        paddingTop:3
        
      }}>
       <View style={{justifyContent: 'center', alignItems:'center'}}>
       
       <Carousel
            width={250}
            height={200}
            animate={false}
            hideIndicators={true}
            indicatorAtBottom={false}
            indicatorSize={15}
            indicatorText="✽"
            indicatorColor="#00008B"
            //onPageChange={(number) =>{this.mudatexto(number)}}
            >

            
                <View style={styles.contentContainer}>
                <Image
                style={{width: 250, height: 200, borderRadius:3}}
                source={require('../imgs/imgs_infoUC/monolitos1.jpg')}
                />
                </View>

                <View style={styles.contentContainer}>
                <Image
                style={{width: 250, height: 200, borderRadius:3}}
                source={require('../imgs/imgs_infoUC/monolitos2.jpg')}
                />
                </View>


                <View style={styles.contentContainer}>
                <Image
                style={{width: 250, height: 200, borderRadius:3}}
                source={require('../imgs/imgs_infoUC/monolitos3.png')}
                />
                </View>

                <View style={styles.contentContainer}>
                <Image
                style={{width: 250, height: 200, borderRadius:3}}
                source={require('../imgs/imgs_infoUC/monolitos4.jpg')}
                />
                </View>

                <View style={styles.contentContainer}>
                <Image
                style={{width: 250, height: 200, borderRadius:3}}
                source={require('../imgs/imgs_infoUC/monolitos5.jpg')}
                />
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
         
          
          
          
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  contentContainer: {
    borderWidth: 2,
    backgroundColor:'#1E90DD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer2: {
    borderWidth: 2,
    borderColor: '#1E90FF',
    backgroundColor:'#1E90DD',
    flex: 1
  },
});
  
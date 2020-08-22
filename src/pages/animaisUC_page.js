import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-carousel-view';
import data from '../textos_animais.json';
import data2 from '../nomes_animais.json';
import { Container, Header, Content, Accordion } from "native-base";
var SoundPlayer = require('react-native-sound');

var song = null;

const dataArray = [
  { "title": "Habitat", "content": "Lorem ipsum dolor sit amet" },
  { "title": "Alimentação", "content": "Lorem ipsum dolor sit amet" },
  { "title": "Third Element", "content": "Lorem ipsum dolor sit amet" }
];

export default class animaisUC_page extends Component{
  static navigationOptions = {
    title: 'ANIMAIS',
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
       auxtexto:[],
       pause: false, 
       nome_popular:"popular",
       nome_cientifico:"científico",  
    }
}

componentDidMount(){

  


  this.setState({auxtexto: data[0].data.texto0, nome_popular: data2.nomes[0][0], nome_cientifico: data2.nomes[0][1]});
}

mudatexto(id){
 
  this.playSound2('carasuja.mp3');


  if(id==0){
    this.setState({auxtexto: data[0].data.texto0, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }

  if(id==1){
    this.setState({auxtexto: data[0].data.texto1, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }

  if(id==2){
    this.setState({auxtexto: data[0].data.texto2, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==3){
    this.setState({auxtexto: data[0].data.texto3, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }

  if(id==4){
    this.setState({auxtexto: data[0].data.texto4, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }

  if(id==5){
    this.setState({auxtexto: data[0].data.texto5, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==6){
    this.setState({auxtexto: data[0].data.texto6, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==7){
    this.setState({auxtexto: data[0].data.texto7, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==8){
    this.setState({auxtexto: data[0].data.texto8, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==9){
    this.setState({auxtexto: data[0].data.texto9, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==10){
    this.setState({auxtexto: data[0].data.texto10, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==11){
    this.setState({auxtexto: data[0].data.texto11, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==12){
    this.setState({auxtexto: data[0].data.texto12, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==13){
    this.setState({auxtexto: data[0].data.texto13, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==14){
    this.setState({auxtexto: data[0].data.texto14, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==15){
    this.setState({auxtexto: data[0].data.texto15, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==16){
    this.setState({auxtexto: data[0].data.texto16, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==17){
    this.setState({auxtexto: data[0].data.texto17, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==18){
    this.setState({auxtexto: data[0].data.texto18, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==19){
    this.setState({auxtexto: data[0].data.texto19, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==20){
    this.setState({auxtexto: data[0].data.texto20, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==21){
    this.setState({auxtexto: data[0].data.texto21, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==22){
    this.setState({auxtexto: data[0].data.texto22, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
  if(id==23){
    this.setState({auxtexto: data[0].data.texto23, nome_popular: data2.nomes[id][0], nome_cientifico: data2.nomes[id][1]});
  }
}


playSound(id) {

  if(this.state.pause == false){
  song = new SoundPlayer(id, SoundPlayer.MAIN_BUNDLE, (error) => {
    if(error)
      ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    else {
      song.play((success) => {
        if(!success)
          ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
      });
    }
  });

  this.setState({pause: true});
}else{

  
   song.pause();

    this.setState({pause: !this.state.pause});
  
}

    
  
}



playSound2(id) {

  if(this.state.pause == false){
  song = new SoundPlayer(id, SoundPlayer.MAIN_BUNDLE, (error) => {
    
    
  });
  
  
}else{
  song.pause();
  this.setState({pause: false});
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

      <View style={{alignItems:'center'}}>

      <View style={{paddingHorizontal:5, justifyContent:'center', alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>{this.state.nome_popular}</Text>
      <Text style={{fontSize:15,fontStyle:'italic', color:"#FFFFFF"}}>({this.state.nome_cientifico})</Text>
      
      </View>

      <Carousel
      width={'100%'}
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

        <Image
          style={{width: 250, height: 200, borderRadius:3}}
          source={require('../imgs/imgs_animais/carasuja1.jpg')}
          />

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('carasuja.mp3')}}>
        
          <Image
          style={{width: 50, height: 50, borderRadius:3}}
          source={require('../imgs/playb.png')}
          />
          </TouchableOpacity>
      
     
      
      

      </View>

      

      <View style={styles.contentContainer}>
        
            <Image
            style={{width: 250, height: 200, borderRadius:3}}
            source={require('../imgs/imgs_animais/jb1.jpg')}
            />

            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('joaodebarro.mp3')}}>
        
            <Image
            style={{width: 50, height: 50, borderRadius:3}}
            source={require('../imgs/playb.png')}
            />
            </TouchableOpacity>
        
      </View>



      <View style={styles.contentContainer}>
        
            <Image
            style={{width: 250, height: 200, borderRadius:3}}
            source={require('../imgs/imgs_animais/asabranca.jpg')}
            />

            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('asabranca.mp3')}}>
        
            <Image
            style={{width: 50, height: 50, borderRadius:3}}
            source={require('../imgs/playb.png')}
            />
            </TouchableOpacity>
        
      </View>


      <View style={styles.contentContainer}>
        
            <Image
            style={{width: 250, height: 200, borderRadius:3}}
            source={require('../imgs/imgs_animais/bemtevi.jpg')}
            />

            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('bemtevi.mp3')}}>
        
            <Image
            style={{width: 50, height: 50, borderRadius:3}}
            source={require('../imgs/playb.png')}
            />
            </TouchableOpacity>
        
      </View>


      <View style={styles.contentContainer}>
        
            <Image
            style={{width: 250, height: 200, borderRadius:3}}
            source={require('../imgs/imgs_animais/codornadonordeste.jpg')}
            />

            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('codornadonordeste.mp3')}}>
        
            <Image
            style={{width: 50, height: 50, borderRadius:3}}
            source={require('../imgs/playb.png')}
            />
            </TouchableOpacity>
        
      </View>

      <View style={styles.contentContainer}>
        
            <Image
            style={{width: 200, height: 200, borderRadius:3}}
            source={require('../imgs/imgs_animais/irere.jpg')}
            />

            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('irere.mp3')}}>
        
            <Image
            style={{width: 50, height: 50, borderRadius:3}}
            source={require('../imgs/playb.png')}
            />
            </TouchableOpacity>
        
      </View>


      <View style={styles.contentContainer}>
        
      <Image
      style={{width: 200, height: 200, borderRadius:3}}
      source={require('../imgs/imgs_animais/mergulhao.jpg')}
      />

      <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('mergulhao.mp3')}}>
  
      <Image
      style={{width: 50, height: 50, borderRadius:3}}
      source={require('../imgs/playb.png')}
      />
      </TouchableOpacity>
  
</View>

<View style={styles.contentContainer}>
        
<Image
style={{width: 200, height: 200, borderRadius:3}}
source={require('../imgs/imgs_animais/gavicaboclo.jpg')}
/>

<TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('gavicaboclo.mp3')}}>

<Image
style={{width: 50, height: 50, borderRadius:3}}
source={require('../imgs/playb.png')}
/>
</TouchableOpacity>

</View>


    <View style={styles.contentContainer}>
            
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/gavicarijo.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('gavicarijo.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>

    </View>




    <View style={styles.contentContainer}>      
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/gcaramuj.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('gcaramuj.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>

    <View style={styles.contentContainer}>      
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/queroquero.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('queroquero.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/rolinhafogoapagou.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('rolinhafogoapagou.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/anupreto.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('anupreto.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 170, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/Coruja_Buraqueira.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('corujaburaqueira.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/Bacurauzinho-da-caatinga.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('bacudacaatinga.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 250, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/sucuaradecoroaazul.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('sucuaradecoroaazul.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 250, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/martim-pescador.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('martimpescador.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 250, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/chiluchilu.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('chiluchilu.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 250, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/carcara.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('carcara.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 200, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/periquitorei.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('periquitorei.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>


    <View style={styles.contentContainer}>      
    <Image
    style={{width: 250, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/canariodaterra.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('canariodaterra.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>



    <View style={styles.contentContainer}>      
    <Image
    style={{width: 250, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/seriema.jpg')}
    />

    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:5}} onPress={() => {this.playSound('seriema.mp3')}}>

    <Image
    style={{width: 50, height: 50, borderRadius:3}}
    source={require('../imgs/playb.png')}
    />
    </TouchableOpacity>
    </View>

    

    <View style={styles.contentContainer}>
    <Image
    style={{width: 280, height: 200, borderRadius:3}}
    source={require('../imgs/imgs_animais/puma1.jpg')}
    />
    </View>

    <View style={styles.contentContainer}>
      <Image
      style={{width: 250, height: 200, borderRadius:3}}
      source={require('../imgs/imgs_animais/gato1.jpg')}
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
   // justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#1E90FF',
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
  
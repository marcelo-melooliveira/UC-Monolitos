import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Button, TouchableWithoutFeedback,TouchableOpacity, ActivityIndicator} from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import { PermissionsAndroid } from 'react-native';
import Modal from "react-native-modal";




const GOOGLE_MAPS_APIKEY = 'Coloque sua API Key aqui';

export default class trilhasUC_page extends Component{
  static navigationOptions = {
    title: 'TRILHAS',
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
        
       latitude:0,
       longitude:0,
       loading:true,
       isModalVisible: 0,
       origem: {latitude:0, longitude:0},
       destino: {latitude:-4.965693, longitude: -39.010209},
       //origin: { latitude: 42.3616132, longitude: -71.0672576 },
      // destination: { latitude: 42.3730591, longitude: -71.033754 },
      origin: { latitude: -3.754571, longitude:   -38.552482 },
       destinationgc: { latitude: -4.983039, longitude: -39.068726},
       destinationsp1: { latitude: -5.009849, longitude: -39.120830},
       destinationsp2: { latitude: -5.023429, longitude: -39.099280},
       destinationpr1: { latitude: -4.945329, longitude: -38.993883}, 
       destinationpr2: { latitude: -4.935717, longitude:  -38.979209},
       destinationpr3: { latitude: -4.921734, longitude:  -38.973240},
       destinationpr4: { latitude: -4.955654, longitude:  -38.996123},
       destinationsm1: { latitude: -5.073251, longitude:  -39.090220},
       destinationsm2: { latitude: -5.056692, longitude:  -39.051511 },
       
       
    }
}


async requestLocationPermission() {
  try {

      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
              'title': 'App Location Permission',
              'message': 'Maps App needs access to your map ' +
                  'so you can be navigated.'
          }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
          return true;

      } else {
          console.log("location permission denied");
          return false;
      }

  } catch (err) {
      console.warn(err)
  }

}


async componentDidMount() {

  
  let isGranted = await this.requestLocationPermission();

  if (isGranted) {
      this.getLocation();
  }

  this.getLocation();

}


  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let newOrigin = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };

        //alert(position.coords.latitude);
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude, loading:false})
//alert("achou!");
        
         //console.log('new origin');
         //console.log(newOrigin);

        this.setState({
            origin: newOrigin
        });
        

    }, (err) => {
        //console.log('error');
        //console.log(err)

    }, {enableHighAccuracy: true, maximumAge: 0, timeout: 10000})

  };


  handleGetGoogleMapDirections(id){

    let aux = this.state.origin;
    aux.latitude = this.state.latitude;
    aux.longitude = this.state.longitude;
    
    if(id == 1){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationgc,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }


    if(id == 2.1){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationsp1,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 2.2){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationsp2,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 3.1){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationpr1,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 3.2){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationpr2,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 3.3){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationpr3,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 3.4){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationpr4,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 4.1){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationsm1,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }

    if(id == 4.2){

      const data = {

        source: aux,
         //source: this.state.origin,
        destination: this.state.destinationsm2,
        params: [
            {
              key: "travelmode",
              value: "driving"
            }
        ]
        
    };

    getDirections(data)

    }
    

    

  };


  render() {

    if (this.state.loading) {
      return (
  
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="dodgerblue" />
          <Text>Aguarde, buscando sua localização</Text>
          <Text>(Locais fechados dificultam a busca)</Text>
        </View>
      )
    }
   
    
    return (

      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{paddingTop:10}}>

      <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('destinos')}}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 200, height: 200, borderRadius:3}}
                source={require('../imgs/localize.png')}
                />
                <Text style={styles.welcome}>Localize-se na UC MONA</Text>
                <Text style={styles.instructions}>Veja se você está dentro da UC MONA!</Text>
            </View>
        </TouchableWithoutFeedback>
        
            
      </View>


      <View style={{paddingTop:15}}>

      <TouchableWithoutFeedback onPress={() => this.handleGetGoogleMapDirections(1)}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 200, height: 200, borderRadius:3}}
                source={require('../imgs/caminho.png')}
                />
                <Text style={styles.welcome}>Pedra da galinha choca</Text>
                <Text style={styles.instructions}>Caminho para o local da trilha</Text>
            </View>
        </TouchableWithoutFeedback>
        
            
      </View>


      <View style={{paddingTop:15}}>

      <TouchableWithoutFeedback onPress={() => this.setState({isModalVisible:1})}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 200, height: 200, borderRadius:3}}
                source={require('../imgs/caminho.png')}
                />
                <Text style={styles.welcome}>Serra do padre</Text>
                <Text style={styles.instructions}>Caminho para o local das trilhas</Text>
            </View>
        </TouchableWithoutFeedback>
        
            
      </View>

      <View style={{paddingTop:15}}>

      <TouchableWithoutFeedback onPress={() => this.setState({isModalVisible:2})}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 200, height: 200, borderRadius:3}}
                source={require('../imgs/caminho.png')}
                />
                <Text style={styles.welcome}>Pedra Riscada</Text>
                <Text style={styles.instructions}>Caminho para o local das trilhas</Text>
            </View>
        </TouchableWithoutFeedback>
        
            
      </View>


      <View style={{paddingTop:15}}>

      <TouchableWithoutFeedback onPress={() => this.setState({isModalVisible:3})}>
            <View style={styles.container_dentro}>
                <Image
                style={{width: 200, height: 200, borderRadius:3}}
                source={require('../imgs/caminho.png')}
                />
                <Text style={styles.welcome}>Serra do Macaco</Text>
                <Text style={styles.instructions}>Caminho para o local das trilhas</Text>
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
      
      <View style={{paddingVertical:15, paddingHorizontal:10}}>
      
      <Button title="Trilha 1" onPress={() => this.handleGetGoogleMapDirections(2.1)}/>
      <View style={{paddingVertical:10}} />
      <Button title="Trilha 2" onPress={() => this.handleGetGoogleMapDirections(2.2)}/>
      </View>
     
      
      </View>  

</Modal> 


<Modal style={{justifyContent:'center', alignItems:'center'}} isVisible={this.state.isModalVisible==2}>
<View style={{width:'100%',height:'100%', backgroundColor:'#FFFFFF', borderRadius:4}}>
   
    <TouchableOpacity style={{width:'100%', height:50,alignItems:'flex-end', paddingRight:5, paddingTop:3, borderRadius:4}}
    onPress = {() => {this.setState({ isModalVisible: 0 })}}
    >
          <Image
          style={{width: 40, height: 40, borderRadius:3}}
          source={require('../imgs/fechar.png')}
          />
    </TouchableOpacity>
  
  <View style={{paddingVertical:15, paddingHorizontal:10}}>
  
  <Button title="Trilha 1" onPress={() => this.handleGetGoogleMapDirections(3.1)}/>
  <View style={{paddingVertical:10}} />
  <Button title="Trilha 2" onPress={() => this.handleGetGoogleMapDirections(3.2)}/>
  <View style={{paddingVertical:10}} />
  <Button title="Trilha 3" onPress={() => this.handleGetGoogleMapDirections(3.3)}/>
  <View style={{paddingVertical:10}} />
  <Button title="Trilha 4" onPress={() => this.handleGetGoogleMapDirections(3.4)}/>
  </View>
 
  
  </View>  

</Modal>



<Modal style={{justifyContent:'center', alignItems:'center'}} isVisible={this.state.isModalVisible==3}>
<View style={{width:'100%',height:'100%', backgroundColor:'#FFFFFF', borderRadius:4}}>
   
    <TouchableOpacity style={{width:'100%', height:50,alignItems:'flex-end', paddingRight:5, paddingTop:3, borderRadius:4}}
    onPress = {() => {this.setState({ isModalVisible: 0 })}}
    >
          <Image
          style={{width: 40, height: 40, borderRadius:3}}
          source={require('../imgs/fechar.png')}
          />
    </TouchableOpacity>
  
  <View style={{paddingVertical:15, paddingHorizontal:10}}>
  
  <Button title="Trilha 1" onPress={() => this.handleGetGoogleMapDirections(4.1)}/>
  <View style={{paddingVertical:10}} />
  <Button title="Trilha 2" onPress={() => this.handleGetGoogleMapDirections(4.2)}/>
 
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
    //justifyContent: 'center',
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
    paddingVertical:3,
    paddingHorizontal:15
    
    
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

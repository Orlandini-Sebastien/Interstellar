import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
  
      
        <ScrollView style={styles.scrollapp} > 
        <StatusBar style='light' />
       <View style={styles.container}>
   

      <View style={styles.first}>
          <Image resizeMode='contain' style={styles.logo} source={require("./assets/logo.png")} />
      </View>

      <View style={styles.firstBloc}>
        <View>
           <Text style={styles.title}>Interstellar</Text>
           <Text style={styles.undertitle}>2014 PG-13 2h49min Adventure, Drama, Sci-Fi</Text>
        </View>

       <View style={styles.bloc}>
        <Image resizeMode='cover' style={styles.interstellar} source={require("./assets/interstellar.jpg")} />
        <View style={styles.aside}> 
          <Text style={styles.textAside} > A team of explorers travel through a wormHole in space in an attempt to ensure humanity's survival</Text>
          <TouchableOpacity style={styles.textAside2} activeOpacity={0.8}><Text style={styles.btn}>+ ADD TO WATCHLIST</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.blocRate}>
        <View style={styles.blocRate1} >
            <FontAwesome name="star" size={24} color="#E6B91F" />
            <Text style={styles.textStar}>8.6/10</Text>
            <Text style={styles.textCritic}>1.1M</Text>
        </View>
        <View style={styles.blocRate1} >
            <Feather name="star" size={24} color="gray" />
            <Text style={styles.textStar}>RATE THIS</Text>
        </View>
        <View style={styles.blocRate1} >
            <Image resizeMode='contain' style={styles.metascore} source={require("./assets/74.png")}  />
            <Text style={styles.textStar}>Metascore</Text>
            <Text style={styles.textCritic}>46 critic reviews</Text>
        </View>
      </View>
      </View>

      <View style={styles.firstBloc} >
          <View style={styles.titleundertitle}>
             <Text style={styles.title}>Top Billed Cast</Text>
             <Text style={styles.asidetitle}>SEE ALL</Text>
          </View>
          <View style={styles.scroll}>


             <ScrollView horizontal={true} >

                <View style={styles.Acteur}>
                  <Image resizeMode='cover' style={styles.PhotoActeur} source={require("./assets/matthew.jpg")}  />
                  <View style={styles.blocTextImage}>
                       <Text style={styles.textStar}>Matthew McCon...</Text>
                        <Text style={styles.textStar}>Cooper</Text>
                  </View>
                </View>

                <View style={styles.Acteur}>
                  <Image resizeMode='cover' style={styles.PhotoActeur} source={require("./assets/anne.jpg")}  />
                  <View style={styles.blocTextImage}>
                       <Text style={styles.textStar}>Anne Hathaway</Text>
                        <Text style={styles.textStar}>Brand</Text>
                  </View>
                </View>


                    <View style={styles.Acteur}>
                  <Image resizeMode='cover' style={styles.PhotoActeur} source={require("./assets/jessica.jpg")}  />
                  <View style={styles.blocTextImage}>
                       <Text style={styles.textStar}>Jessica Chastain</Text>
                        <Text style={styles.textStar}>Murph</Text>
                  </View>
                </View>
            </ScrollView>
            <Text style={styles.lastTitle}>Director</Text>
            <Text style={styles.lastText}>Christopher Nolan</Text>
            <Text style={styles.lastTitle}>Writers</Text>
            <Text style={styles.lastText}>Jonathan Nolan (written by) and Christopher Nolan (written by)</Text>
          </View>
      </View>
      
          
    </View>
    </ScrollView>
   

   
  );
}

const styles = StyleSheet.create({
  barre:{
    color:'white',
    backgroundColor:'black'
  },
  container: {

    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  firstBloc:{
backgroundColor: '#151515',

width:'100%',
marginTop:10,
shadowColor: "#151515",
shadowOpacity: 0.8,
shadowRadius: 4,
shadowOffset: {
  height: 1,
  width: 1
}

  },
  first : {
    backgroundColor:'#2E2E2E',
    height:60,
    marginTop:20,
    width:400,
    justifyContent:'center',
    shadowColor: "#2E2E2E",
shadowOpacity: 0.8,
shadowRadius: 4,
shadowOffset: {
  height: 1,
  width: 1
}
  },
  logo : {
    marginLeft:10,
    width:70,
    height:30,
  
  },
  titleundertitle:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  height:50,
  marginTop:10,
  marginBottom:10
},
  title : {
    color:'white',
    fontSize:30,
    marginLeft:5
  },
  undertitle:{
    color:'gray',
    lineHeight:15,
    marginLeft:5,
    marginTop:10,
    fontSize:15
  },
  asidetitle : {
    
    color:'#0277BD',
    fontSize:15,
    marginLeft:5,
    textAlign:'right',
    paddingRight:20,
    fontWeight:'bold'
    
  },
  interstellar:{
    height:200,
    marginLeft:5,
    flex:1
  },
  bloc : {
    flexDirection:'row',
     marginTop: 30,
     justifyContent:'space-around',
     height:200
  },
  aside:{
    flex:2,
  },
  textAside:{
    color:'white',
    flex:2,
    padding:15,
  },
  textAside2:{
    color:'white',
    flex:2,
    padding:15,
  },
  btn:{
    color:'white',
    backgroundColor: '#0277BD',
    justifyContent:'center',
    lineHeight:40,
    textAlign:'center',
    borderRadius: 5,
  },
  textStar:{
    color:'white'
  },
  M:{
    color:'white'
  },
  blocRate:{
    flexDirection:'row',
    height:120,
    alignItems:'flex-start',
    justifyContent:'space-around',
    padding:35
  },
  blocRate1:{
    flex:1,
    alignItems:'center',
    gap:3
  },
  metascore:{
    height:24,
    width:24
  },
  textCritic:{
    color:'gray',
    fontSize:13
  },

  blocTextImage:{
    padding:15,
    height:70,
    backgroundColor:'#2E2E2E'
   
  },
  Acteur:{
    padding:5
  },
  PhotoActeur:{
    height:200,
    width:150
  },
  lastTitle:{
    color:'white'
  },
  lastText:{
    color:'gray',
    marginBottom:10
  }
});

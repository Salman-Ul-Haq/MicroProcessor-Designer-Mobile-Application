import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity, Pressable} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";
import { Picker, DatePicker } from 'react-native-wheel-pick';
import LoadProgram from "./LoadProgram";
import Start from "./Start";



const LCCA = ({navigation}) => {
  
    return (
        <View style={{flex:1, backgroundColor:'#4cbb17'}}>

        <TouchableOpacity
     style={styles.lpButton}
     onPress={()=>{navigation.navigate("LoadProgram")}}>    
   <Text  style={styles.mptext}>
               LOAD  PROGRAM
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
    style={styles.cpButton}
     onPress={()=>{navigation.navigate('LoadProgram')}}>    
   <Text  style={styles.mptext}>
               CREATE  PROGRAM
   </Text>
 </TouchableOpacity>
 
 <TouchableOpacity
    style={styles.ciButton}
     onPress={()=>{navigation.navigate('LoadProgram')}}>    
   <Text  style={styles.mptext}>
               CREATE  INSTRUCTION
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
    style={styles.asfButton}
     onPress={()=>{navigation.navigate('LoadProgram')}}>    
   <Text  style={styles.mptext}>
               ADD  ASSEMBLY  FILE
   </Text>
 </TouchableOpacity>

 


   </View>
 );  
 }   

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 0,
   },
   
   
   lpButton: {
   position: 'absolute',
    top: 140,
    left: 80,
    zIndex:1,
     width: 200,
     height: 70,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
     borderRadius: 100,
     backgroundColor: 'gold',
   },
   cpButton: {
    position: 'absolute',
     top: 240,
     left: 80,
     zIndex:1,
      width: 200,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'gold',
    },
    ciButton: {
        position: 'absolute',
         top: 340,
         left: 80,
         zIndex:1,
          width: 200,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 100,
          backgroundColor: 'gold',
        },
        asfButton: {
            position: 'absolute',
             top: 440,
             left: 80,
             zIndex:1,
              width: 200,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 100,
              backgroundColor: 'gold',
           },
   mptext: {
     fontFamily: "ChakraPetch-Bold",
     fontSize:17,
     color:'black',
     fontWeight: '100',
     textAlign:'center',
   },
});

  export default LCCA
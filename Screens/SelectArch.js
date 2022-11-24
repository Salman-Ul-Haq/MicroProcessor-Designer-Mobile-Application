import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity, Pressable, StatusBar} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import Start from "./Start";
import LCCA from "./LCCA";


const SelectArch = ({navigation}) => {
  return (
   

    <View style={[styles.container, {
        flexDirection: "column", backgroundColor: "red" 
      }]}>
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "black" translucent = {false}/>

          {/* //1 */}
        <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }} >
            <View style={{ flex: 1, backgroundColor: "black" }}>
            </View>
            <View style={{ flex: 1, backgroundColor: "#4cbb17" }}>
            </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }} >
            <View style={{ flex: 1, backgroundColor: "#4cbb17" }}>
            </View>
            <View style={{ flex: 1, backgroundColor: "black" }}>
            </View>
        </View>

        <View style={styles.roundButton}>
        <TouchableOpacity
      style={styles.roundButton1}
      onPress={()=>{navigation.navigate('Start')}}>    
    <Text  style={styles.mptext}>
                START
    </Text>
    
  </TouchableOpacity>
  </View>

        
        <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }} >
            <View style={{ flex: 1, backgroundColor: "black" }}>
            </View>
            <View style={{ flex: 1, backgroundColor: "#4cbb17" }}>
            </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }} >
            <View style={{ flex: 1, backgroundColor: "#4cbb17" }}>
            </View>
            <View style={{ flex: 1, backgroundColor: "black" }}>
            </View>
        </View>
        
      </View>
 

);  
}   
const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 0,
},


roundButton: {
position: 'absolute',
 top: 289,
 left: 129,
 zIndex:1,
marginTop: 20,
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 100,
  backgroundColor: 'gold',
},
mptext: {
  fontFamily: "ChakraPetch-Bold",
  fontSize:24,
  color:'black',
  fontWeight: '100',
  textAlign:'center',
  marginTop:5,
  

},
});

export default SelectArch
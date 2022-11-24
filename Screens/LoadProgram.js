import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity, Pressable, ScrollView} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";
import { Picker, DatePicker } from 'react-native-wheel-pick';



const LoadProgram = ({navigation}) => {
  
    return (
        <View style={{flex:1, backgroundColor: '#E7F7EB'}}>

        <View style={{flex:0.12, backgroundColor: 'black'}}>
        <Text style={styles.mptext}>SELECT PROGRAM</Text>
    
        </View>
    
    <View style={{flex:1, backgroundColor:'#4cbb17'}}>
    <ScrollView >
<View style={{marginTop:0}}>

    <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
               ADD TWO NUMBERS
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
   SUBTRACT TWO NUMBERS
      </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
   MOVE VALUE
         </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
   STORE VALUE
      </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
   ADD THREE NUMBERS   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
   SUBTRACT THREE NUMBERS
      </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
               PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

 <TouchableOpacity
     style={styles.Buttonz}
     onPress={()=>{navigation.navigate("")}}>    
   <Text  style={styles.btntext}>
PPP
   </Text>
 </TouchableOpacity>

</View>
    </ScrollView>
    </View>
       
        
    
    
        </View>
    
      )}
      const styles = StyleSheet.create({
        btns: {
          width: 340,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'darkorange',
          marginRight:100,
          padding: 5,
          marginLeft:10,
          marginTop: 5,
          fontWeight: 'bold',
    
        },
        mptext: {
            fontFamily: "ChakraPetch-Bold",
            fontSize:35,
            color:'#4cbb17',
            fontWeight: '100',
            textAlign:'center',
            marginTop: 12
          },
          btntext: {
            fontFamily: "ChakraPetch-Bold",
            fontSize:17,
            color:'black',
            textAlign:'center',
            marginTop: 5
          },
   Buttonz: {
     zIndex:1,
      width: 340,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 19,
      backgroundColor: 'gold',
      marginTop:12,
      marginLeft: 10
    },
      });
  export default LoadProgram
import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity, Pressable} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";
import { Picker, DatePicker } from 'react-native-wheel-pick';


const Start = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("4 BIT");
  
    return (
  
    <View style={{ flex: 1, flexDirection: 'column'}}>

        <View style={{ flex: 0.4, backgroundColor: "#4cbb17" }}>
            <Text style={styles.mptext}>
                SELECT ARCHITECTURE
            </Text>
        
        </View>

        <View style={{ height: 315, padding: 0, backgroundColor: "#4cbb17" }}>
        <Picker
         style={{fontFamily: 'ChakraPetch-Bold', fontWeight:'bold' ,backgroundColor: '#4cbb17', width: 360, height: 225, borderRadius: 15, borderWidth: 8, borderColor:'black',borderStyle:'dashed', overflow: "hidden", height: 15, padding: 150,}}
         textColor='black'
        textSize={24}
        selectTextColor='gold'
        fontFamily='ChakraPetch-Bold'
        fontWeight= 'bold'
borderRadius = '23'
borderColor= 'blue'
borderWidth='21'
        activeItemTextStyle={{fontSize: 18, fontWeight: 'bold'}}
         selectedValue='16 BIT'
         pickerData={['4 BIT', '8 BIT', '16 BIT', '32 BIT', '64 BIT']}
         onValueChange={value => { console.log(value) }}
         
        />
        </View>


  <View style={{ flex: 1, backgroundColor: "#4cbb17" }}>
     
  <View style={styles.roundButton}>
        <TouchableOpacity
      style={styles.roundButton1}
      
     onPress={()=>{navigation.navigate('LCCA')}}>   

    <Text style={styles.btntext}>
                SELECT
    </Text>
    
  </TouchableOpacity>
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
     top: 29,
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
      fontSize:30,
      color:'black',
      fontWeight: '100',
      textAlign:'center',
      marginTop:65,
    }, 
    btntext: {
        fontFamily: "ChakraPetch-Bold",
        fontSize:24,
        color:'black',
        fontWeight: '100',
        textAlign:'center',
      },     
})
  export default Start
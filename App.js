import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import SelectArch from './Screens/SelectArch';
import Start from './Screens/Start';
import LCCA from './Screens/LCCA';
import LoadProgram from './Screens/LoadProgram';



const App=()=>{
  const Stack = createNativeStackNavigator()
  useEffect(() => {
    SplashScreen.hide();
   }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SelectArch' screenOptions={{
    headerShown: false
  }}>


        <Stack.Screen name ="SelectArch" component={SelectArch} />
        <Stack.Screen name ="Start" component={Start} />
        <Stack.Screen name ="LCCA" component={LCCA} />

        <Stack.Screen name ="LoadProgram" component={LoadProgram} />






      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



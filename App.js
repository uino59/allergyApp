import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react'
import { reqSend } from './ApiFunctions.js'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ResultScreen({route, navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {route.params.route.product.known_ingredients_n ? 
          <View>
            <Text>{JSON.stringify(route.params.route.product.product_name)}</Text>
            <Text>Known Ingredients: {JSON.stringify(route.params.route.product.ingredients_text)}</Text>
            <Text>Allergens: {JSON.stringify(route.params.route.product.allergens_from_ingredients)}</Text>
          </View>
        : 
          <>{route.params.route.product.product_name ? 
          <Text>{JSON.stringify(route.params.route.product.product_name)} currently has no ingredients uploaded.
          Please consider uploading the ingredients to help future users.</Text>
        :
          <Text>Sorry, this item currently doesn't exist in the database. Please consider uploading it to help future users. </Text>}
          </>
        }
      </View>
    )
  }


function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function getData(barcode) {
    return new Promise(function(resolve, reject) {
      reqSend(barcode).then(function (response) {
        if(response != undefined) {
          console.log(`getData executed successfully returning ${response}`)
          resolve(response);
        } else {
          reject(Error("Error in getData()"))
        }
      })
    })
  }

  function handleBarCodeScanned({ type, data }) {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    getData(`${data}`).then(function (response) {
      console.log(`data received into handleBarCodeScanned: ${JSON.stringify(response.status)}`)
      if(response.status === 0){
        alert(`Sorry, no product with barcode ${data} is currently in the database. Please consider uploading it to help future users!`);
        setScanned(false);
      } else {
        console.log(`${response.product.allergens_from_ingredients}`);
        navigation.navigate('Results', {route: response});
        setScanned(false);
      }
    })
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {scanned && <Button title={'View Results'} onPress={() => {setScanned(false); navigation.navigate('Results')}} />} */}
    </View>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

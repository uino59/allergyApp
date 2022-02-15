import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react'
import { reqSend } from '../../services/ApiCalls/ApiFunctions'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ResultScreen } from '../ResultScreen/index';


export function ScannerScreen() {
    
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


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
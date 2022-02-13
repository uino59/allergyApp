import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react'
import { reqSend } from './Api_functions.js'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [productInfo, setProductInfo] = useState(null);
  const [allergenInfo, setAllergenInfo] = useState(null);
  
  ////////////////////////////////////////////////////////////////
  /////////////////// Barcode Scanner functions //////////////////
  ////////////////////////////////////////////////////////////////
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    getData(`${data}`)
  };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  ////////////////////////////////////////////////////////////////

  // var barcode = '5740900805408';
  // var barcode = '20797232';
  // var barcode = '4056489558019'; //No match in database
  // var barcode = '4056489559795'; // Has match but no ingredients - app should check for this
  // var barcode = '20425609';

  function getData(barcode) {
    reqSend(barcode).then(result => {
      if (result.status === 0) {
        console.log(`The item with barcode ${barcode} was not found in the database, please consider uploading it to help future users`)
      } else if(result.status===1){
      console.log(`reqSend status: ${result.status}`)
      setProductInfo(result);
      return result
      }})
    .catch(error => {
      console.log(`There was an error ${error}`)
    })
  }

  // Sets allergenData any time that productInfo changes
  useEffect(() => {
    console.log("productInfo changed")
    if (productInfo != null) {
    setAllergenData();
    }
  }, [productInfo])

  useEffect(() => {
    if (allergenInfo != null && productInfo != null) {
      displayAllergenData();
    }
  }, [allergenInfo])

  function setAllergenData() {
    setAllergenInfo(productInfo.product.allergens_from_ingredients);
  }

  function displayAllergenData() {
    if (productInfo.product.known_ingredients_n != undefined) {
      console.log(`Allergens found`)
      console.log(`${productInfo.product.product_name} contains allergens: ${allergenInfo}`);
    } else {
      console.log(`No ingredient list`)
      console.log(`${productInfo.product.product_name} is in the database, but has no ingredients listed, consider uploading them to help fellow users`)
    }
  }

  return (
    // <View style={styles.container}>
    //   <Button 
    //     title="Lurpack"
    //     onPress={() => {
    //       getData('5740900805408');
    //     }}
    //   />
    //   <Button 
    //     title="Chorizo"
    //     onPress={() => {
    //       getData('4056489559795');
    //     }}
    //   />
    //   <Button 
    //     title="Unknown"
    //     onPress={() => {
    //       getData('4056489558019');
    //     }}
    //   />
    //   <Text>Make the API call</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
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

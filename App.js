import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react'
import { reqSend } from './Api_functions.js'

export default function App() {
  const [productInfo, setProductInfo] = useState(null);
  const [allergenInfo, setAllergenInfo] = useState(null);
  // var barcode = '5740900805408';
  // var barcode = '20797232';
  // var barcode = '4056489558019'; //No match in database
  // var barcode = '4056489559795'; // Has match but no ingredients - app should check for this
  var barcode = '20425609';

  function getData(barcode) {
    reqSend(barcode).then(result => {
      if (result.status === 0) {
        console.log(`The item with barcode ${barcode} was not found in the database, please consider uploading it to help future users`)
      } else if(result.status===1){
      console.log(`reqSend status: ${result.status}`)
      setProductInfo(result);
      setAllergenInfo(result.product.allergens_from_ingredients)
      if (result.product.known_ingredients_n != undefined) {
        console.log(`${productInfo.product.product_name} contains allergens: ${allergenInfo}`);
      } else {
        console.log(`${productInfo.product.product_name} is in the database, but has no ingredients listed, consider uploading them to help fellow users`)
      }
    }
      
      
    }).catch(error => {
      console.log(`There was an error ${error}`)
    })
  }

  return (
    <View style={styles.container}>
      <Button 
        title="Title"
        onPress={() => getData(barcode)}
      />
      <Text>Make the API call</Text>
      <StatusBar style="auto" />
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

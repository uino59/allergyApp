import { View, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import NavigationBar from '../../components/NavigationBar/index';
import SearchButton from '../../components/SearchButton/index';
import { getData } from '../../services/ApiCalls/index';

export default function ManualInputScreen() {
    const navigation = useNavigation();
    const [barcode, setBarcode] = useState(null);

    function handleBarCodeInput(barcode) {
        getData(`${barcode}`).then(function (response) {
          console.log(`data received into handleBarInput: ${JSON.stringify(response.status)}`)
          if(response.status === 0){
            alert(`Sorry, no product with barcode ${data} is currently in the database. Please consider uploading it to help future users!`);
          } else {
            console.log(`${response.product.allergens_from_ingredients}`);
            navigation.navigate('Results', {route: response});
          }
        })
      };
    
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={styles.contentContainer}>
                
                <TextInput
                    style={styles.input}
                    onChangeText={newString => setBarcode(newString)}
                    placeholder={"Enter a barcode..."}
                    placeholderTextColor="#aaaaaa"
                ></TextInput> 
                <SearchButton
                    onPress={() => {
                        if(barcode != undefined) {
                            console.log(barcode)
                            handleBarCodeInput(barcode);
                        } else {
                            Alert.alert(
                                'Invalid Input',
                                'Please enter a valid barcode number'
                            )
                        }
                        } 
                    }   
                />
                
            </View>  
            </KeyboardAvoidingView>
            <NavigationBar />
        </View>
        
        
    );
}
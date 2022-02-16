import { Text, View } from 'react-native';
import * as React from 'react';

import NavigationBar from '../../components/NavigationBar/index';


export default function ResultScreen({route, navigation}) {
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
        <NavigationBar></NavigationBar>
        
        </View>
    )
  }
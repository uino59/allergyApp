import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import * as React from 'react';
import {CheckAllergens} from '../../services/Functions/index'
import styles from './styles';
import NavigationBar from '../../components/NavigationBar/index';
import { XCircle, CheckCircle, Question } from 'phosphor-react-native';

import ResultListItem from '../../components/ResultListItem';
import { linkToOFFApp } from '../../services/Functions/index';

export default function ResultScreen({route}) {
    let allergenMatches = CheckAllergens(global.userData, route.params.route.product.allergens_from_ingredients);
    console.log(`Ingredients count = ${route.params.route.product.ingredients_n}`)

    if(!route.params.route.product.ingredients_n){
        return(
            <View style={styles.containerNeutral}>
                <View style={styles.contentContainer}>
                        <View style={styles.iconContainer}>
                            <Question 
                                color="#fff"
                                size={"80%"}                    
                            />
                        </View>
                        <View style={styles.resultContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.resultsText}>No ingredients found for {route.params.route.product.product_name} </Text>
                                <Text style={styles.resultsText}>Please consider uploading them!</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.button} 
                                title="Upload"
                                // Button redirects to Open Food Facts app to upload data
                                onPress={() => {linkToOFFApp();}}
                            >
                                    <Text style={styles.buttonText}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <NavigationBar />
                <StatusBar style="dark" />
            </View>
        )
    }
    else if (allergenMatches.length > 0) {
        console.log(`Allergens found: ${allergenMatches}`)
        return(
            <View style={styles.containerBad}>
                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <XCircle 
                            color="#fff"
                            size={"80%"}                    
                        />
                    </View>
                    <View style={styles.resultContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.resultsBadText}>{route.params.route.product.product_name} contains the following allergens:</Text>
                            <FlatList
                                style={styles.resultScrollView}
                                data={allergenMatches}
                                renderItem={({item}) => <ResultListItem text={item}></ResultListItem>}
                                keyExtractor={(index) => index.toString()}
                            ></FlatList>
                        </View>
                    </View>
                </View>
                <NavigationBar />
                <StatusBar style="dark" />
            </View>
        )
    } else {
        console.log(`No allergens found`)
        return(
            <View style={[styles.containerGood, {backgroundColor:"green"}]}>
                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <CheckCircle 
                            color="#fff"
                            size={"80%"}                    
                        />
                    </View>
                    <View style={styles.resultContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.resultsText}>No allergens found for {route.params.route.product.product_name}</Text>
                        </View>
                    </View>
                </View>
                <NavigationBar />
                <StatusBar style="dark" />
            </View>
        )
    }
  }
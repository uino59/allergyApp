import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {CheckAllergens} from '../../services/Functions/index'
import styles from './styles';
import NavigationBar from '../../components/NavigationBar/index';
import {Icon} from 'react-native-elements';
import { verticalScale } from 'react-native-size-matters';


import ResultListItem from '../../components/ResultListItem';
import { linkToOFFApp } from '../../services/Functions/index';

export default function ResultScreen({route}) {
    if(route.params.route.product == undefined) {
        return(
            <View style={styles.containerNeutral}>
                    <View style={styles.contentContainer}>
                            <View style={styles.iconContainer}>
                                <Icon name="question-circle" type="font-awesome-5" size={verticalScale(175)} color="#fff"/>
                            </View>
                            <View style={styles.resultContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.resultsText}>Sorry, this product isn't in the database yet </Text>
                                    <Text style={styles.resultsText}>Please consider uploading it!</Text>
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
    } else {
    
        let allergenMatches = CheckAllergens(global.userData, route.params.route.product.allergens_from_ingredients);
        console.log(`Ingredients count = ${route.params.route.product.ingredients_n}`)

        
        if(!route.params.route.product.ingredients_n){
            return(
                <View style={styles.containerNeutral}>
                    <View style={styles.contentContainer}>
                            <View style={styles.iconContainer}>
                                <Icon name="question-circle" type="font-awesome-5" size={verticalScale(175)} color="#fff"/>
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
                            <Icon name="circle-with-cross" type="entypo" size={verticalScale(175)} color="#fff"/>
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
                            <Icon name="check-circle" type="font-awesome-5" size={verticalScale(175)} color="#fff"/>   
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
  }
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Platform } from 'react-native';
import AppLink from 'react-native-app-link';

// Blank user data 
import { newUser } from '../../assets/BlankUserSettings/data';


export async function CreateNewUserOnInit(newUser){
    try {
        const jsonValue = JSON.stringify(newUser)
        await AsyncStorage.setItem('@User', jsonValue)
      } catch(e) {
        console.log(`Error when saving new user data ${e}`);
      }
    
      console.log('Done.')
}

export async function GetUserDataObject(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
      } catch(e) {
        console.log(`Error when reading user data ${e}`);
      }
}

export async function saveUserData(data) {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('@User', jsonValue)
        console.log(`User settings saved successfully: ${jsonValue}`)
      } catch(e) {
        console.log(`Error when saving user data ${e}`);
      }
}

// Check is AsyncStorage has user settings already, create blank settings if not and save them
// to global.userData
export async function getOrCreateUserPreferences() {
    GetUserDataObject('@User').then((userObject) => {
        if(userObject === null){
          console.log(`First time user, creating blank user preferences`)
          CreateNewUserOnInit(newUser).then(() => {
                  GetUserDataObject('@User').then((userObject) => {
                    global.userData = userObject;
                  }).then(console.log(`User Data: ${global.userData}`))
                })
        } else {
          console.log(`Object fetched: ${JSON.stringify(userObject)}`);
          global.userData = userObject
        }
        
      })
}


export function CheckAllergens(userData, productAllergens) {
    let array = [];
    array = processProductAllergensString(productAllergens);
    
    const allergenMatches = findAllergenMatches(userData, array);
    return allergenMatches;
}

function processProductAllergensString(productAllergens) {
    let allergens = [];
    // remove the 'en:' prefix from allergens since it's unnecessary and causes duplicates
    allergens = productAllergens.replace('en:', '')
    // allergens are passed as a string so split words into array
    const allergenArray = [...new Set(allergens.split(", "))]
    return allergenArray;
}

function findAllergenMatches(userData, array) {
    let matches = [];

    for (const allergen in userData) {
        if(userData[allergen] === true) {
            for (var i = 0; i < array.length; i++) {
                // console.log(`Comparing ${allergen} with ${array[i]}`)
                if (array[i] == allergen) {
                    let match = allergen;
                    match.replace(/^\w/, (c) => c.toUpperCase())
                    matches.push(match);
                }
            } 
            
        }
    }
    return matches;
}

// Redirects to app store/play store page for open food facts app
export function linkToOFFApp() {
  AppLink.openInStore({ appName: 'openfoodfacts.scanner', appStoreId: '588797948', appStoreLocale: 'uk', playStoreId: 'org.openfoodfacts.scanner' })
}


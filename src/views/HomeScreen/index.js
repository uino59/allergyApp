import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Dimensions, SafeAreaView, Image } from 'react-native';
import NavigationBar from '../../components/NavigationBar/index';
import { useNavigation } from '@react-navigation/native';
import { iconColour } from '../../assets/GlobalStyles/styles';
import styles from './styles';

import {Icon} from 'react-native-elements';
import { verticalScale } from 'react-native-size-matters';

import HomeScreenButton from '../../components/HomeScreenButton';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {

    const navigation = useNavigation();

    const buttonSize = windowWidth * 0.45;
    const iconSize = verticalScale(65);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>  
                  
                <View style={styles.contentContainer}>
                
                    <View style={styles.homeButtonDoubleContainer}>
                       <HomeScreenButton
                            icon={<Icon name="ban" type="font-awesome-5" color={iconColour} size={iconSize} />}
                            text="Allergies"
                            onPress={() => {navigation.navigate('Allergens')}}
                            buttonSize={buttonSize}
                        />
                        <HomeScreenButton
                            icon={<Icon name="keyboard-o" type="font-awesome" color={iconColour} size={iconSize} />}
                            text="Enter Code Manually"
                            onPress={() => {navigation.navigate('Manual Input')}}
                            buttonSize={buttonSize}
                        />
                    </View>
                    <View style={styles.homeButtonSingleContainer}>
                        <HomeScreenButton
                            icon={<Icon name="barcode-scan" type="material-community" color={iconColour} size={iconSize} />}
                            text="Scan"
                            onPress={() => {navigation.navigate('Scanner')}}
                            buttonSize={buttonSize}
                        />
                    </View>
                    <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                
                /> 
                </View>
            
            </SafeAreaView>
            <NavigationBar />
            <StatusBar style="dark" />
        </View>
      )
    }
    
  
  
    

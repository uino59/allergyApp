import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { iconColour } from '../../assets/GlobalStyles/styles';
import styles from './styles';
import {Icon} from 'react-native-elements';
import { verticalScale } from 'react-native-size-matters';

const NavigationBar = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.navigationBarContainer}>
            <TouchableOpacity style={styles.navIcon} onPress={() => {navigation.navigate('Home')}}>
                <Icon name="home" type="simple-line-icon" color={iconColour} size={verticalScale(40)} />
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon} onPress={() => {navigation.navigate('Scanner')}}>
                <Icon name="barcode-scan" type="material-community" color={iconColour} size={verticalScale(40)} />   
            </TouchableOpacity>
        </View>
    )
}

export default NavigationBar;


  

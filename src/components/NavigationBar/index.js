import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { House, Barcode } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { iconColour } from '../../assets/GlobalStyles/styles';
import { styles } from './styles';

const NavigationBar = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.navigationBarContainer}>
            <TouchableOpacity style={styles.navIcon} onPress={() => {navigation.navigate('Home')}}>
                <House 
                    size={"70%"} 
                    color={iconColour} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon} onPress={() => {navigation.navigate('Scanner')}}>
                <Barcode 
                    size={"70%"} 
                    color={iconColour} 
                />
            </TouchableOpacity>
        </View>
    )
}

export default NavigationBar;


  

import { Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { homeTextColour } from '../../assets/GlobalStyles/styles';
import React from 'react';

const HomeScreenButton = ({ icon, text, onPress, buttonSize }) => {
    return (
        <TouchableOpacity 
            style={[styles.homeButton, {width: buttonSize, height: buttonSize }]}
            onPress={onPress} 
        >
            {icon}
            <Text style={[styles.buttonText, {color: homeTextColour}]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default HomeScreenButton;
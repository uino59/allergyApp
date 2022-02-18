import { Text, View } from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import React from 'react';


const ResultListItem = ({text}) => {
    return (
        <View style={styles.container}>
            <Icon name="warning" type="ionicon" size={35} color="black"/>
            <Text style={styles.resultsListText}> {text}</Text>
        </View>
        
    )
}

export default ResultListItem;
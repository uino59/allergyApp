import { Text, View } from 'react-native';
import styles from './styles';
import { CircleWavyWarning } from 'phosphor-react-native'

const ResultListItem = ({text}) => {
    return (
        <View style={styles.container}>
            <CircleWavyWarning size={35} />
            <Text style={styles.resultsListText}> {text}</Text>
        </View>
        
    )
}

export default ResultListItem;
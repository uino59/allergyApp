import { TouchableOpacity, Text } from "react-native";

import styles from './styles';

const SearchButton = ({ onPress }) => {

    return(
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Search</Text> 
        </TouchableOpacity> 
    )
}

export default SearchButton;
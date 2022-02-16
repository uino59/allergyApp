import { View, Dimensions } from 'react-native';
import NavigationBar from '../../components/NavigationBar/index';
import { User, Barcode, Keyboard } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { iconColour } from '../../assets/GlobalStyles/styles';
import styles from './styles';

import HomeScreenButton from '../../components/HomeScreenButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen() {

    const navigation = useNavigation();

    const buttonSize = windowWidth * 0.45
    const iconSize = '60%'

    return (
        <View style={styles.container}>          
            <View style={styles.contentContainer}>
                <View style={styles.homeButtonDoubleContainer}>
                    <HomeScreenButton
                        icon={<User color={iconColour} size={iconSize} ></User>}
                        text="User"
                        // onPress={() => {navigation.navigate('User')}}
                        buttonSize={buttonSize}
                    />
                    <HomeScreenButton
                        icon={<Keyboard color={iconColour} size={iconSize} ></Keyboard>}
                        text="Enter Code Manually"
                        onPress={() => {navigation.navigate('Manual Input')}}
                        buttonSize={buttonSize}
                    />
                </View>
                <View style={styles.homeButtonSingleContainer}>
                    <HomeScreenButton
                        icon={<Barcode color={iconColour} size={iconSize} ></Barcode>}
                        text="Scan"
                        onPress={() => {navigation.navigate('Scanner')}}
                        buttonSize={buttonSize}
                    />
                </View>
            </View>
        <NavigationBar />
        </View>
      )
    }
    
  
  
    

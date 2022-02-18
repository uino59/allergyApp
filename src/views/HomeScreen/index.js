import { StatusBar } from 'expo-status-bar';
import { View, Dimensions, SafeAreaView, Image } from 'react-native';
import NavigationBar from '../../components/NavigationBar/index';
import { User, Barcode, Keyboard, Prohibit } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { iconColour } from '../../assets/GlobalStyles/styles';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreenButton from '../../components/HomeScreenButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen() {

    const navigation = useNavigation();

    const buttonSize = windowWidth * 0.45
    const iconSize = '60%'

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>  
                  
                <View style={styles.contentContainer}>
                
                    <View style={styles.homeButtonDoubleContainer}>
                       <HomeScreenButton
                            icon={<Prohibit color={iconColour} size={iconSize} ></Prohibit>}
                            text="Allergies"
                            onPress={() => {navigation.navigate('Allergens')}}
                            // onPress={() => {console.log(global.userData)}}
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
    
  
  
    

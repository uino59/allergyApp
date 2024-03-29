import { StatusBar } from 'expo-status-bar';
import { View, FlatList, SafeAreaView, ScrollView } from 'react-native';
// import { SettingsSwitch } from 'react-native-settings-components';
import SettingsList from 'react-native-settings-list';
import { useState } from 'react';
import React from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { saveUserData } from '../../services/Functions/index';

import styles from './styles';
import NavigationBar from '../../components/NavigationBar/index';

export default function AllergensScreen() {
    const navigation = useNavigation();

    const [milk, setMilk ] = useState(global.userData.milk);
    const [egg, setEgg ] = useState(global.userData.egg);
    const [peanuts, setPeanuts ] = useState(global.userData.peanuts);
    const [soybeans, setSoybeans ] = useState(global.userData.soybeans);
    const [wheat, setWheat ] = useState(global.userData.wheat);
    const [gluten, setGluten ] = useState(global.userData.gluten);
    const [nuts, setNuts] = useState(global.userData.nuts);
    const [shellfish, setShellfish ] = useState(global.userData.shellfish);
    const [fish, setFish] = useState(global.userData.fish);
    const [sesame, setSesame] = useState(global.userData.sesame);

    
    // Use the cleanup part of useFocusEffect to save data when user navigates away from page
    useFocusEffect(
        React.useCallback(() => {
          // Do nothing when focussed
    
          return () => {
            console.log(`Navigated away, saving data`)
            saveUserData(global.userData);
            
          };
        }, [])
      );


    return(
        <View style={styles.container}>
          <View style={styles.contentContainer}>
          <SettingsList>
        	            <SettingsList.Header headerText='Set Allergies' headerStyle={{color:'white'}}/>
                        <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.milk}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.milk = value;
                                setMilk(value);
                                console.log(`Milk changed to ${global.userData.milk}`)
                            }}
                            hasSwitch={true}
                            title='Milk'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.egg}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.egg = value;
                                setEgg(value);
                                console.log(`Egg changed to ${global.userData.egg}`)
                            }}
                            hasSwitch={true}
                            title='Egg'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.peanuts}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.peanuts = value;
                                setPeanuts(value);
                                console.log(`Peanuts changed to ${global.userData.peanuts}`)
                            }}
                            hasSwitch={true}
                            title='Peanuts'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.soybeans}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.soybeans = value;
                                setSoybeans(value);
                                console.log(`Soybeans changed to ${global.userData.soybeans}`)
                            }}
                            hasSwitch={true}
                            title='Soybeans'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.wheat}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.wheat = value;
                                setWheat(value);
                                console.log(`Wheat changed to ${global.userData.wheat}`)
                            }}
                            hasSwitch={true}
                            title='Wheat'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.gluten}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.gluten = value;
                                setGluten(value);
                                console.log(`Gluten changed to ${global.userData.gluten}`)
                            }}
                            hasSwitch={true}
                            title='Gluten'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.nuts}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.nuts = value;
                                setNuts(value);
                                console.log(`Nuts changed to ${global.userData.nuts}`)
                            }}
                            hasSwitch={true}
                            title='Nuts'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.shellfish}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.shellfish = value;
                                setShellfish(value);
                                console.log(`Shellfish changed to ${global.userData.shellfish}`)
                            }}
                            hasSwitch={true}
                            title='Shellfish'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.fish}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.fish = value;
                                setFish(value);
                                console.log(`Fish changed to ${global.userData.fish}`)
                            }}
                            hasSwitch={true}
                            title='Fish'
                          />
                          <SettingsList.Item
                            hasNavArrow={false}
                            switchState={global.userData.sesame}
                            itemWidth={50}
                            switchOnValueChange={value => {
                                global.userData.sesame = value;
                                setSesame(value);
                                console.log(`Sesame changed to ${global.userData.sesame}`)
                            }}
                            hasSwitch={true}
                            title='Sesame'
                          />
                            
                    </SettingsList>
                    </View>
                    <NavigationBar />
            <StatusBar style="dark" />
        </View>
        // <View style={styles.container}>
        //     <SafeAreaView style={styles.container}>
        //         <View style={styles.contentContainer}>  
                    
        //             {/* <SettingsSwitch
        //                 title="Milk"
        //                 onValueChange={value => {
        //                     global.userData.milk = value;
        //                     setMilk(value);
        //                     console.log(`Milk changed to ${global.userData.milk}`)
        //                 }}
        //                 value={milk}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Egg"
        //                 onValueChange={value => {
        //                     global.userData.egg = value;
        //                     setEgg(value);
        //                     console.log(`Egg changed to ${global.userData.egg}`)
        //                 }}
        //                 value={egg}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Peanuts"
        //                 onValueChange={value => {
        //                     global.userData.peanuts = value;
        //                     setPeanuts(value);
        //                     console.log(`Peanuts changed to ${global.userData.peanuts}`)
        //                 }}
        //                 value={peanuts}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Soybeans"
        //                 onValueChange={value => {
        //                     global.userData.soybeans = value;
        //                     setSoybeans(value);
        //                     console.log(`Soybeans changed to ${global.userData.soybeans}`);
        //                 }}
        //                 value={soybeans}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Wheat"
        //                 onValueChange={value => {
        //                     global.userData.wheat = value;
        //                     setWheat(value);
        //                     console.log(`Wheat changed to ${global.userData.wheat}`)
        //                 }}
        //                 value={wheat}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Gluten"
        //                 onValueChange={value => {
        //                     global.userData.gluten = value;
        //                     setGluten(value);
        //                     console.log(`Gluten changed to ${global.userData.gluten}`)
        //                 }}
        //                 value={gluten}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Nuts"
        //                 onValueChange={value => {
        //                     global.userData.nuts = value;
        //                     setNuts(value);
        //                     console.log(`Nuts changed to ${global.userData.nuts}`)
        //                 }}
        //                 value={nuts}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Shellfish"
        //                 onValueChange={value => {
        //                     global.userData.shellfish = value;
        //                     setShellfish(value);
        //                     console.log(`Shellfish changed to ${global.userData.shellfish}`);
        //                 }}
        //                 value={shellfish}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Fish"
        //                 onValueChange={value => {
        //                     global.userData.fish = value;
        //                     setFish(value);
        //                     console.log(`Fish changed to ${global.userData.fish}`)
        //                 }}
        //                 value={fish}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             />
        //             <SettingsSwitch
        //                 title="Sesame"
        //                 onValueChange={value => {
        //                     global.userData.sesame = value;
        //                     setSesame(value);
        //                     console.log(`Sesame changed to ${global.userData.sesame}`);
        //                 }}
        //                 value={sesame}
        //                 trackColor={{
        //                     true: colors.switchEnabled,
        //                     false: colors.switchDisabled,
        //                 }}
        //             /> */}
        //         </View>
        //     </SafeAreaView>
            
    )
    
    
}
const colors = {
    switchEnabled: "#00ff00",
    switchDisabled: "#efeff3",
  };
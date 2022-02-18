import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    containerBad: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
    },
    containerGood: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
    },
    containerNeutral: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      flex:2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultContainer: {
      flex:3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      width:"80%",
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: "5%",
    },
    resultsText: {
      marginVertical: 10,
      fontSize: 25,
      textAlign: 'center',
    },
    resultsBadText: {
      fontSize: 25,
      textAlign: 'left',
    },
    resultScrollView: {
      padding: "10%"
    },
    button: {
      height: 70,
      margin: "5%",
      width: "80%",
      fontSize: 25,
      padding: 10,
      borderRadius:20,
      color: '#fff',
      backgroundColor: '#11ff00',
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonText: {
      fontSize: 25,
      color: '#fff',
      fontWeight: 'bold',
  },
    
});
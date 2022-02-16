import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#92B6E8',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    contentContainer: {
      flex: 1,
      // backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column-reverse',
    },
    homeButtonDoubleContainer: {

      // backgroundColor: 'gray',
      width: "100%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 60,
    },
    homeButtonSingleContainer: {
      // backgroundColor: 'darkgray',
      width: "100%",

    },
    homeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 20,
    },
    buttonText: {
      fontSize: 21,
      margin: 10,
      textAlign: 'center',
    }
  });
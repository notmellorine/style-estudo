import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerGeral}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Geography</Text>
      </View>
      <View>
        <TextInput style={[styles.textInput, styles.shadowProps]} placeholder='Search' placeholderTextColor='white'/>
      </View>
      <View style={styles.containerGeography}>
        <View style={styles.circle1}/>
        <View style={styles.textContainer}>
          <Text style={styles.textItens}>Geography</Text>
          <Text style={styles.subtitleItens}>Something etc etc...</Text>
        </View>
      </View>
      <View style={styles.containerSpace}>
        <View style={styles.circle2}/>
        <View style={styles.textContainer}>
          <Text style={styles.textShortItens}>Space</Text>
          <Text style={styles.subtitleItens}>Something etc etc...</Text>
        </View>
      </View>
      <View style={styles.containerPlace}>
        <View style={styles.circle3}/>
        <View style={styles.textContainer}>
          <Text style={styles.textShortItens}>Place</Text>
          <Text style={styles.subtitleItens}>Something etc etc...</Text>
        </View>
      </View>
      <View style={styles.containerEnvironment}>
        <View style={styles.circle4}/>
        <View style={styles.textContainer}>
          <Text style={styles.textItens}>Environment</Text>
          <Text style={styles.subtitleItens}>Something etc etc...</Text>
        </View>
      </View>
      <View style={styles.containerSustainability}>
        <View style={styles.circle5}/>
        <View style={styles.textContainer}>
          <Text style={styles.textItens}>Sustainability</Text>
          <Text style={styles.subtitleItens}>Something etc etc...</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textButtons}>🗑️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textButtons}>✎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textButtons}>☆</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    containerGeral: {
      flex: 1,
      backgroundColor: '#33342f'
    },
    containerTitle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      margin: 10
    },
    title: {
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold',
      margin: 10
    },
    textInput: {
      backgroundColor: '#4d4d4d',
      padding: 20,
      fontSize: 20,
      borderRadius: 100,
      marginHorizontal: 50,
      color: 'white'
    },
    shadowProps: {
      elevation: 20
    },
    containerGeography: {
      alignItems: 'center',
      flexDirection: 'row',
      
    },
    circle1: {
      backgroundColor: '#03ced8',
      borderRadius: 100,
      width: 120,
      height: 120,
      margin: 45,
      alignSelf: 'flex-start'
    },
    textContainer: {
      flexDirection: 'column'
    },
    textItens: {
      color: 'white',
      fontSize: 30,
      marginHorizontal: 75,
      alignSelf: 'center',
      flexDirection: 'column'
    },
    subtitleItens: {
      alignSelf: 'center',
      color: '#5b5b5b',
      flexDirection: 'column'
    },
    containerSpace: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    circle2: {
      backgroundColor: '#5c3cfe',
      borderRadius: 100,
      width: 120,
      height: 120,
      margin: 45,
      marginTop: -10,
      alignSelf: 'flex-start'
    },
    circle3: {
      backgroundColor: '#fdc902',
      borderRadius: 100,
      width: 120,
      height: 120,
      margin: 45,
      marginTop: -10,
      alignSelf: 'flex-start'
    },
    circle4: {
      backgroundColor: '#2cce02',
      borderRadius: 100,
      width: 120,
      height: 120,
      margin: 45,
      marginTop: -10,
      alignSelf: 'flex-start'
    },
    circle5: {
      backgroundColor: '#ea2d6b',
      borderRadius: 100,
      width: 120,
      height: 120,
      margin: 45,
      marginTop: -10,
      alignSelf: 'flex-start'
    },
    containerPlace: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    containerEnvironment: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    containerSustainability: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    textShortItens: {
      color: 'white',
      fontSize: 30,
      marginHorizontal: 115,
      alignSelf: 'center',
      flexDirection: 'column'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buttons: {
      backgroundColor: "#4d4d4d", 
      width:100, 
      height: 100, 
      borderRadius: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textButtons:{
      color: 'white',
      fontSize: 50
    }
});

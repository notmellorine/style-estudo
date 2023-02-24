import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerApp}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.Title}>Geography</Text>
        </View>
        <View>
          <TextInput style={styles.textInput} placeholder='Search' placeholderTextColor='white'/>
        </View>
          <View style={styles.columnContainer}>
              <View style={styles.circle1}/>
              <View style={styles.columns}>
              <Text style={styles.columnsText}>Geography</Text>
              <Text style={styles.fadingText}>Exemplo etc e tal...</Text>
            </View>
          </View>
          <View style={styles.columnContainer}>
              <View style={styles.circle2}/>
              <View style={styles.columns}>
              <Text style={styles.columnsText}>Space</Text>
              <Text style={styles.fadingText}>Exemplo etc e tal...</Text>
            </View>
          </View>
          <View style={styles.columnContainer}>
              <View style={styles.circle3}/>
              <View style={styles.columns}>
              <Text style={styles.columnsText}>Place</Text>
              <Text style={styles.fadingText}>Exemplo etc e tal...</Text>
            </View>
          </View>
          <View style={styles.columnContainer}>
              <View style={styles.circle4}/>
              <View style={styles.columns}>
              <Text style={styles.columnsText}>Environment</Text>
              <Text style={styles.fadingText}>Exemplo etc e tal...</Text>
            </View>
          </View>
          <View style={styles.columnContainer}>
              <View style={styles.circle5}/>
              <View style={styles.columns}>
              <Text style={styles.columnsText}>Sustainability</Text>
              <Text style={styles.fadingText}>Exemplo etc e tal...</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsRow}>
          <View style={styles.buttons}></View>
          <View style={styles.buttons}></View>
          <View style={styles.buttons}></View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#333333',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container1: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  Title: {
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  textInput: {
    backgroundColor: '#4d4d4d',
    fontSize: 20,
    padding: 23,
    margin: 50,
    color: 'white',
    width: 550,
    borderRadius: 100
  },
  circle1: {
 
    backgroundColor: '#03ced8',
    borderRadius: 100,
    flexDirection: 'column',
    width: 120,
    height: 120
  },
  circle2: {
    backgroundColor: '#624adc',
    borderRadius: 100,
    flexDirection: 'row',
    width: 120,
    height: 120
  },
  circle3: {
    backgroundColor: '#ffca00',
    borderRadius: 100,
    flexDirection: 'row',
    width: 120,
    height: 120
  },
  circle4: {
    backgroundColor: '#30d40c',
    borderRadius: 100,
    flexDirection: 'row',
    width: 120,
    height: 120
  },
  circle5: {
    backgroundColor: '#fe3376',
    borderRadius: 100,
    flexDirection: 'row',
    width: 120,
    height: 120
  },
  columns: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40
  },
  columnsText: {
    fontSize: 25,
    alignItems: 'center',
    color: 'white',
    marginRight: 120,
    
  },
  fadingText: {
    alignItems: 'center',
    color: '#5c5c5c',
    fontSize: 15,
    marginRight: 110
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttons: {
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#4c4c4c',
    justifyContent: 'space-around',
    marginLeft: 120
  }
});

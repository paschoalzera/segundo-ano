import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { useState } from 'react';
export default function App() {
    const [nome,setNome] = useState();
    const [exibir, setExibir] = useState("oi");
    const ExibirNome = () => {
      setExibir[(nome)]
    }

  return(
    <View style={styles.container}>
      <Text>digite um texto:</Text>
        <TextInput
            placeholder={"digite seu nome"}
            style={{borderBottomWidth:1, height:40, width:"100%"}}
            onChangeText ={(text) => setNome(text) }        
        
        />
        <Button title="Exiba o Texto" onPress={() => ExibirNome()} />

        <Text>{exibir}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'red'
    }

});




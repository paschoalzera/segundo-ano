import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>.
        <Image 
        style={{width : 100 , height:  100 ,borderRadius:100}}
        source={require("./assets/gabiepaschoal.jpeg")}
        />
   
    <View style= {styles.borda}>

        <Text><h3>Dados Pessoais</h3></Text>

        <TextInput style= {styles.borda2}
            placeholder="Digite seu Nome"
            keyboardType='numeric'
        />

        <TextInput style= {styles.borda2}
            placeholder="Digite seu Telefone"
            keyboardType='numeric'
        />

        <TextInput style= {styles.borda2}
            placeholder="Digite seu Endereço"
            keyboardType='numeric'
        />

        <TextInput style= {styles.borda2}
            placeholder="Digite seu E-mail"
            keyboardType='numeric'
        />

      </View>

      <View style= {styles.borda}>

        <Text><h3>Outras Informações</h3></Text>

        <Picker

            style={{ height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue (itemValue)}
        >
            <Picker.Item label="Rg" value="rg" />
            <Picker.Item label="Cpf" value="cpf" />
            <Picker.Item label="Idade" value="idade" />
            <Picker.Item label="Estado civil" value="estado civil" />

        </Picker>

      </View>


      <View style= {styles.borda}>

        <Text style= {styles.borda2}>Nome: </Text>
        <Text style= {styles.borda2}>Telefone: </Text>
        <Text style= {styles.borda2}>Endereço: </Text>
        <Text style= {styles.borda2}>E-mail: </Text>
        <Text style= {styles.borda2}>Outras Informações: </Text>
        <Text style= {styles.borda2}>Aceito: </Text>

      </View>

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
   
  },
  borda:{
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    width: 300,
  },
  borda2:{
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    width: 270,
    alignItems: 'center',
  },



});




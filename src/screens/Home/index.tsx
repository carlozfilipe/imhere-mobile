import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou em adicionar participante!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>I'm Here!</Text>
      <Text style={styles.eventDate}>Quarta, 20 de Setembro de 2022</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
          >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

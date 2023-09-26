import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou em adicionar participante!');
  }
  
  function handleParticipantRemove(name: string) {
    alert(`Você clicou em remover o participante ${name}!`);
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

      <Participant name="Ada Lovelace" onRemove={() => handleParticipantRemove('Ada')} />
      <Participant name="Carl Sagan" onRemove={() => handleParticipantRemove('Sagan')} />

    </View>
  )
}

import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participants = ['Carlos', 'Pedro', 'Ana', 'João', 'Maria', 'Luana', 'Marcos', 'Jackson', 'Mônica'];

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

      <FlatList\
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}

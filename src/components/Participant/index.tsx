import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  fullName: string;
}

export function Participant( { fullName }: Props ) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { fullName }
      </Text>

      <TouchableOpacity 
          style={styles.button}
          >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';




export function Card({ data, onPress }: any) {
  const [isTaskImportant, setIsTaskImportant] = useState(false);

  function toggleTaskImportant() {
    setIsTaskImportant(prevState => !prevState);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTaskImportant}>
        <MaterialCommunityIcons
          name={isTaskImportant ? "label" : "label-outline"}
          size={22}
          color={isTaskImportant ? "#3B3FB6" : "#000"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data?.description}
          </Text>


        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <MaterialIcons
          name="delete"
          size={22}
          color="#888D97"
        />
      </TouchableOpacity>
    </View>
  );
}
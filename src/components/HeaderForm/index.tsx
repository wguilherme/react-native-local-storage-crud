import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


export function HeaderForm() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <MaterialIcons
          name="chevron-left"
          size={32}
          color="#3B3FB6"
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        Cadastro
      </Text>
    </View>
  );
}
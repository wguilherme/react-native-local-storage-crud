import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import uuid from 'react-native-uuid';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';
import { Input } from '../../components/Input';
import { styles } from './styles';



export function Form() {

  const [description, setDescription] = useState("")

  function handleCreateTodo() {

    const todo = {
      id: uuid.v4(),
      description
    }

    console.log('todo', todo)

  }

  console.log('description', description)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <ScrollView>

          <HeaderForm />

          <View style={styles.form}>
            <Input
              label="Descrição da tarefa"
              onChangeText={setDescription}
              value={description}
            />
          </View>

          <View style={styles.footer}>
            <Button
              title="Salvar tarefa"
              onPress={handleCreateTodo}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';
import { Input } from '../../components/Input';
import { styles } from './styles';
const { getItem, setItem } = useAsyncStorage("@tasksapp:tasks");



export function Form() {

  const [description, setDescription] = useState("")

  async function handleCreateTodo() {


    try {
      const id = uuid.v4()

      const newTask: any = { id, description }

      const response = await getItem();

      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newTask];

      await setItem(JSON.stringify(data));

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Tarefa salva com sucesso 🥳',
        visibilityTime: 3000
      })


    }
    catch (error: any) {
      console.log('error', error?.message);

      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ocorreu um erro ao salvar a tarefa 😥',
        text2: error.message,
        visibilityTime: 3000
      })
    }








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
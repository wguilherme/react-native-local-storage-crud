import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';
import { Input } from '../../components/Input';
import { styles } from './styles';



export function Form() {


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
            />
          </View>

          <View style={styles.footer}>
            <Button
              title="Salvar"
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}
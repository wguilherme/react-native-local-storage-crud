import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { Card, CardProps } from '../../components/Card';
import { HeaderHome } from '../../components/HeaderHome';
import { styles } from './styles';



export function Home() {
  const [data, setData] = useState<CardProps[]>([]);

  return (
    <View style={styles.container}>
      <HeaderHome />

      <View style={styles.listHeader}>
        <Text style={styles.title}>
          Tarefas
        </Text>

        <Text style={styles.listCount}>
          {`${data.length} ao total`}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => { }}
          />
        }
      />

      <View style={styles.footer}>
        <Button
          title="Limpar tarefas"
        />
      </View>
    </View>
  );
}
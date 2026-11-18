import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FAB from './components/FAB';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Create modified system</Text>
      <Text style={styles.text}>{count}</Text>

      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position="right"
      />
      <FAB
        label="reset"
        onPress={() => setCount(0)}
        position="left"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 120,
    color: 'black',
    fontWeight: 'bold'
  },


});

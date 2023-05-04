import { Text, Button, StyleSheet, View } from 'react-native'

function Home ({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>HOME SCREEN</Text>
      <Button
        title='Aller au profile'
        onPress={() => navigation.navigate('👨‍💻 ProfileStack')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home

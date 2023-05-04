import { Text, View, Button, StyleSheet } from 'react-native'

function Map ({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>MAP SCREEN</Text>
      <Button
        title='Aller à la page Home'
        onPress={() => navigation.navigate('😎 Home')}
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

export default Map

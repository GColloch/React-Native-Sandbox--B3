import { Text, View, StyleSheet, Button } from 'react-native'

function Profil ({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>PROFILE SCREEN</Text>
      <Button
        title='Aller à la Map'
        onPress={() => navigation.navigate('🗺️ Map')}
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

export default Profil

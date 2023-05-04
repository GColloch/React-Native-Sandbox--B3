import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Map from '../screens/Map'

const Stack = createNativeStackNavigator()
const TabStack = createBottomTabNavigator()

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='👨‍💻 Profile' component={Profile} />
      <Stack.Screen name='🗺️ Map' component={Map} />
    </Stack.Navigator>
  )
}

const Navigator = () => {
  return (
    <TabStack.Navigator initialRouteName='Home'>
      <TabStack.Screen name='😎 Home' component={Home} />
      <TabStack.Screen
        options={{ headerShown: false }}
        name='👨‍💻 ProfileStack'
        component={ProfileNavigator}
      />
    </TabStack.Navigator>
  )
}

export default Navigator

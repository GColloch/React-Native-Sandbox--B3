import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Camera } from 'react-native-vision-camera'

const CameraScreen = () => {
  useEffect(() => {
    const requestPermission = async () => {
      const newCameraPermission = await Camera.requestCameraPermission()
      const newMicrophonePermission = await Camera.requestMicrophonePermission()
      console.log(newCameraPermission)
      console.log(newMicrophonePermission)
    }
    requestPermission()
  }, [])
  return (
    <View>
      <Text>Camera</Text>
    </View>
  )
}

export default CameraScreen

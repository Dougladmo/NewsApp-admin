import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const ButtonNavigate = ({ text, link }) => {
  const navigation = useNavigation()

  return (
    <View className='bg-red-700 m-auto py-2 px-10 text-center rounded-lg'>
        <Button onPress={() => navigation.navigate(`${link}`)} title={text} color='white' />
    </View>
  )
}

export default ButtonNavigate
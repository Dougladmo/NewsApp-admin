import { View, Text } from 'react-native'
import ButtonNavigate from '../components/Button'
import React from 'react'

const AdminScreen = () => {

  return (
    <View className='w-full h-full flex items-center pt-20 bg-white'>
      <Text className='text-3xl' >Bem-vindo Admin</Text>
      <ButtonNavigate link='NewNews' text='Adicionar Notícia' />
      <ButtonNavigate link='Home' text='Ver notícias' />
    </View>
  )
}

export default AdminScreen
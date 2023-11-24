import { View, Text, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'

const NewNewsScreen = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigation = useNavigation()

  const handleSubmit = () => {
    const news = { title, content }

    fetch('https://codequestpoobackend.willyscampos.repl.co/news/',{
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(news)
    })
    .then(() => {
      alert('Notícia Adicionada')
    })
    .then(() => {
      navigation.navigate('Home')
    })
    .catch((err) => console.log(err))
  }

  return (
    <View className='mt-32 mb-10 shadow-md'>
      <Text className='text-center text-4xl bg-red-700 py-5 text-white font-light'>Nova Notícia</Text>
      <View className='flex flex-col items-center justify-center px-10 py-5 bg-white h-auto'>
        <Text className='text-2xl text-red-700 font-bold mb-2 tracking-widest'>Titulo:</Text>
        <TextInput
          className='border-2 border-solid py-2 pl-4 h-12 w-48 rounded-md text-gray-400 mb-5'
          onChangeText={setTitle}
          value={title}
        />
         <Text className='text-2xl text-red-700 font-bold mb-2 tracking-widest'>Conteúdo</Text>
        <TextInput
          className='border-2 border-solid pl-4 h-20 w-48 rounded-md text-gray-400'
            onChangeText={setContent}
          value={content}
        />
         <View className='bg-red-700 m-auto py-2 px-10 text-center rounded-lg mt-10'>
          <Button onPress={handleSubmit} title='Adicionar' color='white' />
        </View>
      </View>
    </View>
  )
}

export default NewNewsScreen
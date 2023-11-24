import ButtonNavigate from '../components/Button'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const NewsScreen = ( { route } ) => {

  const navigation = useNavigation()

  const handleDelete = () => {
    fetch(`https://codequestpoobackend.willyscampos.repl.co/news/${route.params?.id}`,{
      method: 'DELETE',
    })
    .then(() => {
      alert(`noticia "${route.params?.title}" foi deletada`)
    })
    .then(() => { 
      setTimeout(() => {
        navigation.navigate('Admin')
      }, 500)
    })
    .catch((err) => console.log(err))
  }

  return (
    <View>
      <View className=' bg-red-700 py-5'>
        <Text className='text-3xl text-center font-sans font-light uppercase tracking-widest text-slate-50'>  Notícia </Text>
      </View>
      <View className='bg-white mt-6'>
      <Text className='px-8 pt-8 text-red-700 text-2xl font-bold text-center'>  {route.params?.title} </Text>
        <Text className='px-8 pt-3 text-sm text-gray-500 text-center'>{route.params?.content}</Text>
        <Text className=' p-8 mt-6 text-base text-justify leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolore odio repellendus debitis voluptatibus aspernatur unde! Recusandae repellendus veritatis quam. Est voluptatibus et asperiores vero repudiandae incidunt aspernatur? Quidem, voluptatem!</Text>
        <View className='mt-5 flex flex-row pb-8'>
        <View className='bg-red-700 m-auto py-2 px-10 text-center rounded-lg'>
            <Button onPress={() => navigation.navigate('UpdateNews', {title: `${route.params?.title}`, content: `${route.params?.content}`, id: `${route.params?.id}`})} title='editar' color='white' />
          </View>
          <View className='bg-red-700 m-auto py-2 px-10 text-center rounded-lg'>
            <Button onPress={handleDelete} title='deletar' color='white' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default NewsScreen
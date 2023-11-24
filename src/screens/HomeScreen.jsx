import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import NewsCard from "../components/newsCard";

export default function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://codequestpoobackend.willyscampos.repl.co/news/')
    .then((resp) => resp.json())
    .then((data) => {
      setNews(data)
      console.log('renderizou')
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <View className='w-full h-full bg-white'>    
      <View className=' bg-red-700 py-5'>
        <Text className='text-3xl text-center font-sans font-light uppercase tracking-widest text-slate-50'> Notícias </Text>
      </View>
        <ScrollView className='w-full bg-gray-100'>
          <NewsCard title='Lula veta integralmente medida que prorroga benefício a empresas'  content='Medida abrange os setores que mais empregam no país e visa manter empregos e impulsionar a economia.' />
          {news?.map((item) => {
            if (item.title && item.content){
              return (
                <NewsCard title={item.title} id={item.id} key={item.id} content={item.content} />
              )
            }
          })}
        </ScrollView>
    </View>
  );
}

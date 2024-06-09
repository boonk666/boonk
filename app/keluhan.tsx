import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput,Pressable, View } from 'react-native';

export default function Index() {
  const [keluhan, setkeluhan] = useState('')

  async function submitKeluhan() {
    try{
      const url = process.env.EXPO_PUBLIC_API_URL + '/api/keluhan'
      const token = await AsyncStorage.getItem('token')

      await axios.post(
        url,
        { keluhan },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
    } catch (error){
      console.log(error instanceof AxiosError ? error.response?.data : 'error')
    }
  }

  return (
    <SafeAreaView style={{ minHeight: '100%', justifyContent: 'center',  backgroundColor: '#fff' }}>
      <View style={{padding:40, gap:16}}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom:30}}>Sampaikan Keluhan Anda</Text>
      <TextInput value={keluhan} onChangeText={setkeluhan} placeholder ='Deskripsikan keluhan anda disini' placeholderTextColor={'grey'} style={{ borderWidth: 1,borderRadius:4, borderColor: '#ddd', paddingVertical: 100, paddingHorizontal: 16 }} />
     
      <Pressable onPress={submitKeluhan} style={{backgroundColor:"blue",padding:13,borderRadius:10,marginTop:100,width:100,marginLeft:220}}  >
        <Text style={{color:"white",textAlign:"center",fontWeight:"bold",alignItems:'flex-end'}}>Kirim</Text>
      </Pressable>
      </View>
      
    </SafeAreaView>
  );
}



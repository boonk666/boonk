import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import dayjs, { Dayjs } from 'dayjs';
import id from 'dayjs/locale/id';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Index() {
  const riwayat = ['JANUARI','FEBRUARI','MARET','APRIL','MEI','JUNI','JULI','AGUSTUS','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER']
  const [riwayatPembayaran, setRiwayatPembayaran] = useState<{ month: Dayjs, payment: { date: Dayjs } | null }[]>([])
  const today = dayjs().locale(id)

  async function fetchDataPembayaran() {
    try{
      const url = process.env.EXPO_PUBLIC_API_URL + '/api/get-monthly'
      const token = await AsyncStorage.getItem('token')

      const res = await axios.get(
        url,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      
      setRiwayatPembayaran(Array.from({ length: 12 }).map((item, index) => {
        const date = dayjs().set('month', index)

        const payment = res.data.find((item: { createdAt: string }) => dayjs(item.createdAt).month() === index)

        return {
          month: date,
          payment: payment ? { date: dayjs(payment.date) } : null
        }
      }))
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataPembayaran()
  }, [])

  return <ScrollView  contentContainerStyle={{gap:10, padding:20}}> 
    {riwayatPembayaran.map((item, index) => {
      return  <View key={index} style={{backgroundColor:'white',borderRadius:5,padding:10, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <View>
      <Text style={{marginTop:10,fontSize:20}}>{item.month.format('MMMM')}</Text>
    
      <Text style={{color:'grey',marginTop:20}}>Terkonfirmasi   {item.payment ? item.payment.date.format('HH:mm') : ''}</Text>
      </View>
      <Pressable style={{margin:20,backgroundColor: item.payment ? 'grey' : 'blue',borderRadius:5,padding:10, width:100,borderColor:'grey' }}>
      <Text style={{textAlign:'center',color:'white'}}>{item.payment ? 'LUNAS' : 'BELUM BAYAR'}</Text>
    </Pressable>
    
    </View>
    
    })
  }
   </ScrollView>
  
  ;
}



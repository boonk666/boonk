import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import dayjs from 'dayjs';
import id from 'dayjs/locale/id';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

export default function Index() {
  const today = dayjs().locale(id)
  const [result, setResult] = useState<WebBrowser.WebBrowserResult>()

  async function onBayar() {
    try{
      const url = process.env.EXPO_PUBLIC_API_URL + '/api/payments'
      const token = await AsyncStorage.getItem('token')

      const res = await axios.post(
        url,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )

      const uri = await WebBrowser.openBrowserAsync(res.data.snap_url);
      
      setResult(uri);
    } catch (error){
      console.log(error)
    }  
  }

  return (
<View style={{margin:20, backgroundColor:'white',borderRadius:5,padding:10,marginTop:70, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
  <View>
  <Text style={{marginTop:10}}>TAGIHAN INTERNET</Text>
  <Text style={{marginTop:40,fontSize:24,fontWeight:'bold'}}>Rp 85.000</Text>
  <Text style={{color:'grey',marginTop:5}}>Bayar sebelum 20 {today.format('MMMM YYYY')}</Text>
  </View>
 
  <Pressable style={{margin:20,backgroundColor:'blue',borderRadius:5,padding:10, width:100, }}onPress={onBayar}>
    
    <Text style={{textAlign:'center',color:'white'}}>BAYAR</Text>
  </Pressable>
</View>

  );
}



import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import dayjs from 'dayjs';
import id from 'dayjs/locale/id';

export default function Index() {
  const riwayat = ['JANUARI','FEBRUARI','MARET','APRIL','MEI','JUNI','JULI','AGUSTUS','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER']
  const today = dayjs().locale(id)
  return <ScrollView  contentContainerStyle={{gap:10, padding:20}}> 
    {riwayat.map(item => {
      return  <View key={item} style={{backgroundColor:'white',borderRadius:5,padding:10, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <View>
      <Text style={{marginTop:10,fontSize:20}}>{item}</Text>
    
      <Text style={{color:'grey',marginTop:20}}>Terkonfirmasi   {today.format('HH:mm')}</Text>
      </View>
      <Pressable style={{margin:20,backgroundColor:'grey',borderRadius:5,padding:10, width:100,borderColor:'grey' }}>
      <Text style={{textAlign:'center',color:'white'}}>LUNAS</Text>
    </Pressable>
    
    </View>
    
    })
  }
   </ScrollView>
  
  ;
}



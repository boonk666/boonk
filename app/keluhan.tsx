import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={{ minHeight: '100%', justifyContent: 'center',  backgroundColor: '#fff' }}>
      <View style={{padding:40, gap:16}}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom:30}}>Sampaikan Keluhan Anda</Text>
      <TextInput placeholder ='Deskripsikan keluhan anda disini' placeholderTextColor={'grey'} style={{ borderWidth: 1,borderRadius:4, borderColor: '#ddd', paddingVertical: 100, paddingHorizontal: 16 }} />
     
      <Pressable style={{backgroundColor:"blue",padding:13,borderRadius:10,marginTop:100,width:100,marginLeft:220}}  >
        <Text style={{color:"white",textAlign:"center",fontWeight:"bold",alignItems:'flex-end'}}>Kirim</Text>
      </Pressable>
      </View>
      
    </SafeAreaView>
  );
}



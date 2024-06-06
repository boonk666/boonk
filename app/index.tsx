import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={{ minHeight: '100%', justifyContent: 'center',  backgroundColor: 'white' }}>
      <View style={{padding:50, gap:16}}>
      <Text style={{fontSize:42,fontWeight:'bold',textAlign:"center" }}>BSI.NET</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 24, paddingTop:150, }}>Login</Text>
      <TextInput placeholder='Username' placeholderTextColor={'grey'} style={{ borderWidth: 1, borderRadius: 16, borderColor: '#ddd', paddingVertical: 8, paddingHorizontal: 16 }} />
      <TextInput placeholder='Password' placeholderTextColor={'grey'} style={{ borderWidth: 1, borderRadius: 16, borderColor: '#ddd', paddingVertical: 8, paddingHorizontal: 16, marginBottom: 24 }} />
      <Pressable style={{backgroundColor:"blue",padding:13,borderRadius:16}} onPress={() => router.push('home')}  >
        <Text style={{color:"white",textAlign:"center",fontWeight:"bold",}}>Login</Text>
      </Pressable>
      </View>
      
    </SafeAreaView>
  );
}



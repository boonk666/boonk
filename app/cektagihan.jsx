import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={{ minHeight: '100%', justifyContent: 'center', paddingHorizontal: 50, backgroundColor: '#fff', gap: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 24 }}>Login</Text>
      <TextInput placeholder='Username' style={{ borderWidth: 1, borderRadius: 16, borderColor: '#ddd', paddingVertical: 8, paddingHorizontal: 16 }} />
      <TextInput placeholder='Password' style={{ borderWidth: 1, borderRadius: 16, borderColor: '#ddd', paddingVertical: 8, paddingHorizontal: 16, marginBottom: 24 }} />
      <Pressable style={{backgroundColor:"blue",padding:13,borderRadius:16}} onPress={() => router.push('home')}  >
        <Text style={{color:"white",textAlign:"center",fontWeight:"bold",}}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}



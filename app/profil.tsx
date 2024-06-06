import { Image, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button,Pressable, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={{ minHeight: '30%', justifyContent: 'center',  backgroundColor: 'black' }}>
      <View style={{padding:10}}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 24 }}>Login</Text>
      <TextInput placeholder='Username' placeholderTextColor={'grey'} style={{ borderWidth: 1, borderRadius: 16, borderColor: '#ddd', paddingVertical: 8, paddingHorizontal: 16 }} />
      <TextInput placeholder='Password' placeholderTextColor={'grey'} style={{ borderWidth: 1, borderRadius: 16, borderColor: '#ddd', paddingVertical: 8, paddingHorizontal: 16, marginBottom: 24 }} />

      </View>
      
    </SafeAreaView>
  );
}



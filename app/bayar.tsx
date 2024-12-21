import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as WebBrowser from 'expo-web-browser';
import { useState } from "react";

export default function Index() {
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

  return <View style={{ margin: 20, gap: 16 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Metode Pembayaran</Text>
    <Pressable
      onPress={onBayar}
      style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>Transfer Bank</Text>
      <AntDesign name="right" size={12} />
    </Pressable>
  </View>
}



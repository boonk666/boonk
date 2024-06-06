import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Index() {
  return <View style={{ margin: 20, gap: 16 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Metode Pembayaran</Text>
    <Pressable
      onPress={() => router.push('(bayar)/bank')}
      style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>Transfer Bank</Text>
      <AntDesign name="right" size={12} />
    </Pressable>
  </View>
}



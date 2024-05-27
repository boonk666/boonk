import { View, Text, SafeAreaView, Button } from "react-native";

export default function Home() {
    return <SafeAreaView style={{ backgroundColor: '#fff', minHeight: '100%' }}>
        <View style={{ backgroundColor: '#2563eb', paddingTop: 60, paddingHorizontal: 40, paddingBottom: 40 }}>
            <Text style={{ color: '#fff' }}>
                User
            </Text>
            <Text style={{ color: '#fff' }}>
                22 Mei 2024
            </Text>
        </View>
        <View style={{
            backgroundColor: '#fff',
            marginTop: 24,
            marginHorizontal: 24,
            minHeight: 40,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 8,
            padding: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View style={{ gap: 8 }}>
                <Text>Tagihan Pembayaran</Text>
                <Text>Rp 85.000,00</Text>
            </View>
            <View>
                <Button title="Bayar" />
            </View>
        </View>
    </SafeAreaView>
}
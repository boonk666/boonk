import { View, Text, SafeAreaView, Button, FlatList, TouchableOpacity, Image, ImageProps } from "react-native";

export default function Home() {
    const menus: { name: string, image: ImageProps }[] = [
        {
            name: 'Cek Tagihan',
            image: require('@/assets/images/tagihan.jpg')
            
            
            
        },
        {
            name: 'Riwayat Pembayaran',
            image: require('@/assets/images/riwayat.jpg')
        },
        {
            name: 'Keluhan',
            image: require('@/assets/images/keluhan.jpg')
        },
        {
            name: 'Profil',
            image: require('@/assets/images/profil.png')
        }
    ]
    return <SafeAreaView style={{ backgroundColor: '#fff', minHeight: '100%' }}>
        <View style={{ backgroundColor: '#2563eb', paddingTop: 10, paddingHorizontal: 20, paddingBottom: 10 }}>
            <Text style={{ color: '#fff' }}>
                User
            </Text>
            <Text style={{ color: '#fff' }}>
                22 Mei 2024
            </Text>
            <Text style={{ color: '#fff',marginTop:20, fontWeight:"bold" }}>
                Selamat Datang Pelanggan Setia BSI.Net
            </Text>
        </View>
        <FlatList
            style={{ padding: 24, marginTop: 70}}
            data={menus}
            numColumns={2}
            contentContainerStyle={{ gap: 42 }}
            columnWrapperStyle={{ gap: 16 }}
            renderItem={({ item }) => (<TouchableOpacity style={{ padding: 10, borderWidth: 1, flex: 1, height: 250, borderRadius: 12, borderColor: '#ddd',shadowOpacity:0.2,  }}>
                <Text style={{textAlign:"center",fontWeight:"bold", marginBottom:15}}>{item.name}</Text>
                <Image source={item.image} width={10} height={10} style={{ objectFit: 'cover', width: '100%', height: 200, borderRadius: 12 }} />
            </TouchableOpacity>)}
        />
    </SafeAreaView>
}
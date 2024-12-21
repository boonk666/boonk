import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Button, FlatList, TouchableOpacity, Image, ImageProps } from "react-native";

export default function Home() {
    const [namaPelanggan, setNamaPelanggan] = useState('')

    const menus: { name: string, href:string, image: ImageProps }[] = [
        {
            name: 'Cek Tagihan',
            image: require('@/assets/images/tagihan.jpg'),
            href: 'cektagihan'
        },
        {
            name: 'Riwayat Pembayaran',
            image: require('@/assets/images/riwayat.jpg'),
            href: 'riwayatpembayaran'
        },
        {
            name: 'Keluhan',
            image: require('@/assets/images/keluhan.jpg'),
            href: 'keluhan'
        },
        {
            name: 'Profil',
            image: require('@/assets/images/profil.png'),
            href: 'profil'
        }
    ]

    async function init() {
        setNamaPelanggan(await AsyncStorage.getItem('nama_pelanggan') ?? 'Pelanggan')
    }

    useEffect(() => {
        init()
    })

    return <SafeAreaView style={{ backgroundColor: '#fff', minHeight: '100%' }}>
        <View style={{ backgroundColor: '#2563eb', paddingTop: 36, paddingHorizontal: 20, paddingBottom: 10 }}>
            <Text style={{ color: '#fff' }}>
                {namaPelanggan}
            </Text>
            <Text style={{ color: '#fff' }}>
                {dayjs().format('DD MMMM YYYY')}
            </Text>
            <Text style={{ color: '#fff',marginTop:20, fontWeight:"bold" }}>
                Selamat Datang Pelanggan Setia BSI.Net
            </Text>
        </View>
        <View style={{ padding: 24 }}>
            <View style={{ padding: 16, backgroundColor: '#facc15', borderRadius: 10 }}>
                <Text>Waktu pembayaran kurang 1 hari lagi</Text>
            </View>
        </View>
        <FlatList
            style={{ padding: 24, paddingTop: 0 }}
            data={menus}
            numColumns={2}
            contentContainerStyle={{ gap: 42 }}
            columnWrapperStyle={{ gap: 16 }}
            renderItem={({ item }) => (<TouchableOpacity onPress={()=> router.push(item.href)} style={{ padding: 10, borderWidth: 1, flex: 1, height: 250, borderRadius: 12, borderColor: '#ddd',shadowOpacity:0.2,  }}>
                <Text style={{textAlign:"center",fontWeight:"bold", marginBottom:15}}>{item.name}</Text>
                <Image source={item.image} width={10} height={10} style={{ objectFit: 'cover', width: '100%', height: 200, borderRadius: 12 }} />
            </TouchableOpacity>)}
        />
    </SafeAreaView>
}
import { Text, View } from "react-native";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function BankTransfer() {
    const [va, setVa] = useState({
        amount: 85000,
        account_number: null
    })

    async function fetchBank() {
        try {
            const res = await axios.get(process.env.EXPO_PUBLIC_API_URL + '/api/payments/bank')
            
            setVa(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const loadBank = async () => await fetchBank()

        loadBank()
    }, [])

    return <View style={{ margin: 20, backgroundColor: 'white', padding: 12, borderRadius: 8, gap: 12 }}>
        <View>
            <Text style={{ color: '#555' }}>Total Pembayaran</Text>
            <Text style={{ fontSize: 24 }}>{va.amount}</Text>
        </View>
        <View>
            <Text style={{ color: '#555' }}>No Rekening</Text>
            <Text style={{ fontSize: 24 }}>{va.account_number}</Text>
        </View>
    </View>
}
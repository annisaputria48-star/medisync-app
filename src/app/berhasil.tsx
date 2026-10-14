import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function BerhasilScreen() {
    const router = useRouter();

    return (
    <View style={styles.container}>
        <View style={styles.circleCheck}>
        <Text style={styles.checkMark}>✓</Text>
        </View>

        <Text style={styles.title}>BERHASIL!</Text>
        <Text style={styles.subTitle}>
        Data Stok Amoxicillin 125mg/5ml{"\n"}berhasil diperbarui.
        </Text>

        <View style={styles.detailCard}>
        <Text style={styles.namaObat}>Amoxicillin 125mg/5ml</Text>
        <Text style={styles.infoText}>Stok: 50</Text>
        <Text style={styles.infoText}>Kadaluwarsa: 11/02/28</Text>
        </View>

        <TouchableOpacity style={styles.btnKembali} onPress={() => router.replace('/')}>
        <Text style={styles.btnText}>Kembali Ke Beranda</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0faf4', padding: 24, justifyContent: 'center', alignItems: 'center' },
    circleCheck: { width: 120, height: 120, borderRadius: 60, borderWidth: 8, borderColor: '#0e6273', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    checkMark: { fontSize: 60, color: '#0e6273', fontWeight: 'bold' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#0e6273', marginBottom: 8 },
    subTitle: { textAlign: 'center', color: '#334155', fontSize: 16, marginBottom: 24 },
    detailCard: { backgroundColor: '#cbd5e1', width: '100%', padding: 20, borderRadius: 12, marginBottom: 32 },
    namaObat: { fontSize: 18, fontWeight: 'bold', color: '#0f172a', marginBottom: 8 },
    infoText: { fontSize: 15, color: '#334155', marginTop: 4 },
    btnKembali: { backgroundColor: '#0e6273', width: '100%', padding: 16, borderRadius: 10, alignItems: 'center' },
    btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
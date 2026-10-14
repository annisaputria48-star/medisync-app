import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailStokScreen() {
    const router = useRouter();
    const [stok, setStok] = useState(50);

    return (
    <ScrollView style={styles.container}>
        <View style={styles.barcodeBox}>
        <Text style={styles.barcodeText}>║▌║█║▌│║▌║▌█</Text>
        <Text>780863 185779</Text>
        </View>

        <View style={styles.formCard}>
        <Text style={styles.title}>Forum Detail Stok Obat</Text>

        <Text style={styles.label}>Barcode Id</Text>
        <TextInput style={styles.input} value="780863185779" editable={false} />

        <Text style={styles.label}>Nama Obat</Text>
        <TextInput style={styles.input} value="Amoxicillin 125mg/5ml" />

        <Text style={styles.label}>Jumlah Stok</Text>
        <View style={styles.stokRow}>
            <TouchableOpacity style={styles.btnCount} onPress={() => setStok(stok - 1)}>
            <Text style={styles.btnCountText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.stokText}>{stok}</Text>
            <TouchableOpacity style={styles.btnCount} onPress={() => setStok(stok + 1)}>
            <Text style={styles.btnCountText}>+</Text>
            </TouchableOpacity>

            <View style={styles.unitBadge}>
            <Text>Botol</Text>
            </View>
        </View>

        <Text style={styles.label}>Tanggal Kadaluwarsa</Text>
        <TextInput style={styles.input} value="11/02/28" />

        <TouchableOpacity style={styles.btnSimpan} onPress={() => router.push('/berhasil')}>
            <Text style={styles.btnSimpanText}>Simpan Data Stok</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#94a3b8' },
    barcodeBox: { height: 220, justifyContent: 'center', alignItems: 'center' },
    barcodeText: { fontSize: 32, letterSpacing: 4 },
    formCard: { backgroundColor: '#f0faf4', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, minHeight: 500 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
    label: { fontSize: 14, fontWeight: '600', marginTop: 12, color: '#334155' },
    input: { backgroundColor: '#cbd5e1', padding: 12, borderRadius: 8, marginTop: 6 },
    stokRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
    btnCount: { backgroundColor: '#e2e8f0', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 6 },
    btnCountText: { fontSize: 20, fontWeight: 'bold' },
    stokText: { marginHorizontal: 16, fontSize: 18, fontWeight: 'bold' },
    unitBadge: { backgroundColor: '#cbd5e1', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, marginLeft: 'auto' },
    btnSimpan: { backgroundColor: '#0e6273', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 28 },
    btnSimpanText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TransaksiScreen() {
  const listTransaksi = [
    { nama: 'Annisa putri', ket: 'Obat Demam & Vitamin', tgl: '30/07/2026', total: 'Rp 50.000' },
    { nama: 'Rafa lintang', ket: 'Obat Maag', tgl: '16/08/2026', total: 'Rp 60.000' },
    { nama: 'Fadil Muhammad', ket: 'Antibiotik', tgl: '20/08/2026', total: 'Rp 55.000' },
    { nama: 'Aulia', ket: 'Vitamin', tgl: '11/09/2026', total: 'Rp 75.000' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>
        Selamat Datang <Text style={{ fontWeight: 'bold' }}>Kalila Tania</Text>
      </Text>
      <Text style={styles.subGreeting}>kelola dan pantau semua transaksi pelayanan</Text>

      {/* Card Total Transaksi */}
      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total transaksi</Text>
        <Text style={styles.totalValue}>Rp 26.450.000</Text>
        <Text style={styles.totalGrowth}>↑ 15% dari bulan lalu</Text>
      </View>

      <Text style={styles.sectionTitle}>Transaksi Terbaru</Text>

      {listTransaksi.map((item, index) => (
        <View key={index} style={styles.itemCard}>
          <View>
            <Text style={styles.itemNama}>{item.nama}</Text>
            <Text style={styles.itemKet}>{item.ket}</Text>
            <Text style={styles.itemTgl}>{item.tgl}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.itemTotal}>{item.total}</Text>
            <Text style={styles.itemStatus}>selesai</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 16 },
  greeting: { fontSize: 20, color: '#0f172a' },
  subGreeting: { color: '#64748b', marginBottom: 16 },
  totalCard: { backgroundColor: '#e2e8f0', padding: 20, borderRadius: 16, marginBottom: 20 },
  totalLabel: { fontSize: 14, color: '#475569' },
  totalValue: { fontSize: 26, fontWeight: 'bold', color: '#0f172a', marginVertical: 6 },
  totalGrowth: { color: '#16a34a', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  itemCard: { backgroundColor: '#fff', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  itemNama: { fontSize: 16, fontWeight: 'bold', color: '#0e6273' },
  itemKet: { color: '#64748b', fontSize: 13 },
  itemTgl: { color: '#94a3b8', fontSize: 12, marginTop: 4 },
  itemTotal: { fontSize: 16, fontWeight: 'bold', color: '#0e6273' },
  itemStatus: { color: '#16a34a', marginTop: 4, fontWeight: '600' },
});
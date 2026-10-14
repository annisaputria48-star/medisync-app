import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function LaporanScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>MediSync - Laporan Bulanan</Text>

      {/* Ringkasan Bulanan */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Ringkasan Bulanan</Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Total Penjualan</Text>
            <Text style={styles.valBold}>Rp 18.500.000</Text>
          </View>
          <View>
            <Text style={styles.label}>Net profit</Text>
            <Text style={[styles.valBold, { color: '#16a34a' }]}>+12%</Text>
          </View>
        </View>
      </View>

      {/* Top 3 Obat Terlaris */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Top 3 Obat Terlaris</Text>
        
        <View style={styles.rowList}>
          <Text style={styles.rank}>1. Amoxicillin</Text>
          <Text style={styles.rankVal}>Rp 150.000</Text>
        </View>
        <View style={styles.rowList}>
          <Text style={styles.rank}>2. Paracetamol</Text>
          <Text style={styles.rankVal}>Rp 10.000</Text>
        </View>
        <View style={styles.rowList}>
          <Text style={styles.rank}>3. Vitamin C</Text>
          <Text style={styles.rankVal}>Rp 8.000</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#0e6273', marginBottom: 16 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 16 },
  cardHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#0f172a' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { color: '#64748b', fontSize: 13 },
  valBold: { fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  rowList: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  rank: { fontSize: 15, color: '#334155' },
  rankVal: { fontSize: 15, fontWeight: 'bold', color: '#0f172a' },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PembayaranScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>MediSync - Pembayaran</Text>

      {/* Bill Card */}
      <View style={styles.billCard}>
        <Text style={styles.custLabel}>Costumer</Text>
        <Text style={styles.custName}>Kalila Tania</Text>

        <View style={styles.line} />

        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Paracetamol 120mg/5ml (2)</Text>
          <Text style={styles.priceText}>Rp 30.000</Text>
        </View>

        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Amoxicillin 125mg/5ml (1)</Text>
          <Text style={styles.priceText}>Rp 22.000</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.itemRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>Rp 52.000</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Pilih Metode Pembayaran</Text>

      {/* Payment Options */}
      {['Tunai', 'QRIS / E-Wallet', 'Transfer Bank', 'SeaBank'].map((method, index) => (
        <View key={index} style={styles.methodCard}>
          <Text style={styles.methodText}>{method}</Text>
          <TouchableOpacity style={styles.btnBayar}>
            <Text style={styles.btnBayarText}>Bayar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#0e6273', marginBottom: 16 },
  billCard: { backgroundColor: '#0e6273', padding: 20, borderRadius: 16 },
  custLabel: { color: '#cbd5e1', fontSize: 13 },
  custName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  line: { height: 1, backgroundColor: '#334155', marginVertical: 14 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  itemText: { color: '#fff', fontSize: 15 },
  priceText: { color: '#fff', fontWeight: 'bold' },
  totalLabel: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  totalPrice: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 16, color: '#0e6273' },
  methodCard: { backgroundColor: '#fff', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  methodText: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  btnBayar: { backgroundColor: '#0e6273', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  btnBayarText: { color: '#fff', fontWeight: 'bold' },
});
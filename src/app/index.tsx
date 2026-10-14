import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari..." />
      </View>

      <Text style={styles.greeting}>
        Selamat Datang <Text style={{ fontWeight: 'bold' }}>Kalila Tania</Text>
      </Text>

      <Text style={styles.sectionHeader}>Pemberitahuan Mendesak</Text>

      {/* Card Expired Alert */}
      <View style={styles.alertCard}>
        <Text style={styles.alertIcon}>⚠️</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.alertTitle}>Peringatan Stok Kadaluwarsa H-30</Text>
          <Text style={styles.alertDetail}>Paracetamol 500mg</Text>
          <Text style={styles.alertDetail}>stok : 8</Text>
          <Text style={styles.alertDetail}>Expired : 12/10/26</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Ringkasan Stok Obat</Text>

      {/* Ringkasan Cards */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.cardValid} onPress={() => router.push('/stok')}>
          <Text style={styles.cardTitle}>Valid</Text>
          <Text style={styles.cardValue}>134</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardExpired} onPress={() => router.push('/stok')}>
          <Text style={styles.cardTitle}>Expired</Text>
          <Text style={styles.cardValue}>7</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.btnPembayaran} onPress={() => router.push('/pembayaran')}>
        <Text style={styles.btnText}>Pembayaran</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 16 },
  searchContainer: { backgroundColor: '#e2e8f0', borderRadius: 10, padding: 10, marginBottom: 16 },
  searchInput: { fontSize: 15 },
  greeting: { fontSize: 20, color: '#1e293b', marginBottom: 12 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginVertical: 12, color: '#0f172a' },
  alertCard: { backgroundColor: '#e2e8f0', padding: 16, borderRadius: 12, flexDirection: 'row', alignItems: 'center' },
  alertIcon: { fontSize: 32, marginRight: 12 },
  alertTitle: { color: '#dc2626', fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  alertDetail: { fontSize: 14, color: '#334155' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12 },
  cardValid: { flex: 0.48, backgroundColor: '#0e6273', padding: 20, borderRadius: 12, alignItems: 'center' },
  cardExpired: { flex: 0.48, backgroundColor: '#0e6273', padding: 20, borderRadius: 12, alignItems: 'center' },
  cardTitle: { color: '#fff', fontSize: 18 },
  cardValue: { color: '#fff', fontSize: 36, fontWeight: 'bold', marginTop: 8 },
  btnPembayaran: { backgroundColor: '#0e6273', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
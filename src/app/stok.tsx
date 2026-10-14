import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

export default function KelolaStokScreen() {
  const router = useRouter();
  const [dataStok, setDataStok] = useState([]);

  // Mengambil data dari database MySQL melalui API PHP
  useEffect(() => {
    fetch('http://localhost/medisync-api/get_stok.php')
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          setDataStok(json.data);
        }
      })
      .catch((error) => console.error("Gagal mengambil data stok:", error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Kelola Stok (Database)</Text>

      <View style={styles.sectionHeaderValid}>
        <Text style={styles.headerTitle}>Daftar Stok Obat</Text>
      </View>

      {/* Menampilkan data dari database secara dinamis */}
      <View style={styles.cardContainer}>
        {dataStok.map((item, index) => (
          <TouchableOpacity key={index} style={styles.itemRow} onPress={() => router.push('/detail-stok')}>
            <View>
              <Text style={styles.itemTitle}>{item.nama_obat}</Text>
              <Text style={styles.itemSub}>Jumlah: {item.jumlah_stok}</Text>
            </View>
            <View style={item.status === 'valid' ? styles.badgeGreen : styles.badgeRed}>
              <Text style={item.status === 'valid' ? styles.badgeTextGreen : styles.badgeTextRed}>
                Exp: {item.tanggal_expired}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 16 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: '#0e6273', marginBottom: 16 },
  sectionHeaderValid: { backgroundColor: '#15803d', padding: 12, borderRadius: 10, marginTop: 10 },
  headerTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  cardContainer: { backgroundColor: '#fff', borderRadius: 10, padding: 8, marginTop: 8 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: '#1e293b' },
  itemSub: { color: '#64748b', marginTop: 2 },
  badgeGreen: { backgroundColor: '#dcfce7', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  badgeTextGreen: { color: '#15803d', fontWeight: 'bold', fontSize: 12 },
  badgeRed: { backgroundColor: '#fee2e2', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  badgeTextRed: { color: '#dc2626', fontWeight: 'bold', fontSize: 12 },
});
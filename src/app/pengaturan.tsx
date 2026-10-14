import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PengaturanScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>PENGATURAN</Text>

      {/* Profil */}
      <View style={styles.card}>
        <Text style={styles.name}>Kalila Tania</Text>
        <Text style={styles.role}>Pengguna</Text>
      </View>

      <Text style={styles.sectionTitle}>Aplikasi</Text>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Notifikasi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Tampilan</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Fitur Utama</Text>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#fecaca' }]}>
        <Text style={[styles.menuText, { color: '#dc2626' }]}>Pengingat Expired Obat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#e0f2fe' }]}>
        <Text style={[styles.menuText, { color: '#0284c7' }]}>Penghitung jumlah obat</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Data & Penyimpanan</Text>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Kelola data obat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Backup & Restore</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Lainnya</Text>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Tentang aplikasi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={[styles.menuText, { color: '#dc2626' }]}>Keluar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 16 },
  pageTitle: { fontSize: 20, fontWeight: 'bold', color: '#0e6273', textAlign: 'center', marginBottom: 16 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 16 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#0f172a' },
  role: { color: '#64748b', fontSize: 14 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0e6273', marginVertical: 10 },
  menuItem: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 8 },
  menuText: { fontSize: 15, fontWeight: '600', color: '#334155' },
});
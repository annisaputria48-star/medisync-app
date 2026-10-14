import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/icon.png')} 
        style={styles.logo} 
      />
      <Text style={styles.title}>MediSync</Text>
      <Text style={styles.subtitle}>Pharmacy</Text>
      <Text style={styles.welcome}>Welcome to the apotik escer of{"\n"}MediSync Pharmacy</Text>

      <Text style={styles.label}>Email/Username</Text>
      <TextInput 
        style={styles.input} 
        value={username} 
        onChangeText={setUsername} 
        placeholder="Masukkan username" 
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        placeholder="Masukkan password" 
      />

      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnMasuk} onPress={() => router.replace('/')}>
        <Text style={styles.btnText}>Masuk</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Belum Punya akun? <Text style={styles.linkText}>Daftar</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0faf4', padding: 24, justifyContent: 'center' },
  logo: { width: 120, height: 120, alignSelf: 'center', resizeMode: 'contain' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#005f73', textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#005f73', textAlign: 'center', marginBottom: 12 },
  welcome: { textAlign: 'center', color: '#333', marginBottom: 24, lineHeight: 20 },
  label: { fontSize: 16, fontWeight: '600', color: '#222', marginTop: 12 },
  input: { backgroundColor: '#cbd5e1', padding: 14, borderRadius: 10, marginTop: 6, fontSize: 15 },
  forgotBtn: { alignSelf: 'flex-end', marginVertical: 10 },
  forgotText: { color: '#3b82f6', fontSize: 14 },
  btnMasuk: { backgroundColor: '#0e6273', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 16 },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  footerText: { textAlign: 'center', marginTop: 24, color: '#333' },
  linkText: { color: '#3b82f6', fontWeight: 'bold' },
});
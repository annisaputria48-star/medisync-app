import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
    const timer = setTimeout(() => {
        router.replace("/login");
    }, 2000);
    return () => clearTimeout(timer);
    }, []);

    return (
    <View style={styles.container}>
        <Image
        source={require("../../assets/images/icon.png")} // ganti sesuai nama aset logo kamu
        style={styles.logo}
        />
        <Text style={styles.title}>MediSync</Text>
        <Text style={styles.subtitle}>Pharmacy</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f0faf4",
    justifyContent: "center",
    alignItems: "center",
    },
    logo: { width: 180, height: 180, resizeMode: "contain" },
    title: { fontSize: 36, fontWeight: "bold", color: "#005f73", marginTop: 16 },
    subtitle: { fontSize: 20, color: "#005f73" },
});

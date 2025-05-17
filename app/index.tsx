import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Localizacao from "../components/localizacao"; 

export default function HomeScreen() {
    const router = useRouter();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Componente montado!");
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Bem vindo ao meu App!</Text>
            <Text>Contador: {count}</Text>
            {}
            <View style={{ marginTop: 20 }}>
                <Button title="Aumentar" onPress={() => setCount(count + 1)} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Ir para Home" onPress={() => router.push('/home')} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Stack Navigation" onPress={() => router.push('/navigation/stack')} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Tab Navigation" onPress={() => router.push('/navigation/tabs')} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Drawer Navigation" onPress={() => router.push('/navigation/drawer')} />
            </View>
            {}<Localizacao />

        </View>
    );
}

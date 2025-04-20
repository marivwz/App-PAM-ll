import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Localizacao from "../components/localizacao"; 

export default function HomeScreen() {
    const router= useRouter();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Componente montado!");
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Bem vindo ao meu App!</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => setCount(count + 1)} />
            <Button title="Ir para Home" onPress={() => router.push('/home')} />
         {}   <Localizacao />
        </View>
    );
}

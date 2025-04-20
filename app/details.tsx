import fetchCharacters from "../services/api";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View, FlatList, StyleSheet } from "react-native";

interface Personagem {
    id: number;
    name: string;
    images: [string]
};

export default function Home() {
    const router = useRouter();
    const [personagens, setPersonagens] = useState<Personagem[]>([]);
    const [carregar, setCarregar] = useState(true);

    useEffect(() => {
        async function carregarPersonagens() {
            const dados = await fetchCharacters();
            setPersonagens(dados);
        } carregarPersonagens();
    }, []);

   return(
        <View style={style.container}>
            <Text>Página de detalhes</Text>
            <FlatList 
            data={personagens}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={style.card}>
                    <Image source={{uri: item.images[0]}} style={style.image}/>
                    <Text style={style.name}>{item.name}</Text>
                </View>                
                )}
            />
        </View>
   )
}

 const style = StyleSheet.create({
    container:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff",
    padding: 15
    },

    card:{
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor:"#B4B5B7"
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 5
    },
    name:{
        fontSize: 18,
    }
 });


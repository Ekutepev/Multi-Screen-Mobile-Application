import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileCard from "@/components/ProfileCard/ProfileCard";



export default function interacETransfer() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} hitSlop={10}>
                    <Ionicons name="arrow-back" size={24} color="#008a00" />
                </Pressable>
                <Text style={styles.headerTitle}>Select Profile</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.question}>Which profile would you like to use?</Text>

                <ProfileCard
                    icon="person"
                    name="EVGENY KUTEPOV"
                    email="evgeny.kutepov@hotmail.ca"
                    available="$3,000.00"
                />
                <ProfileCard
                    icon="briefcase"
                    name="EVGENY KUTEPOV (KUTEPOV REALTY)"
                    email="evgeny.kutepov@hotmail.ca"
                    available="$3,000.00"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 16,
        gap: 20,
    },

    question: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },

});

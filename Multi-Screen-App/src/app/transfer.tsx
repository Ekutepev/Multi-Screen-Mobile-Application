import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Transfer() {
    const insets = useSafeAreaInsets();
    const [amount, setAmount] = useState("");

    const formatAmount = () => {
        const number = parseFloat(amount);

        if (isNaN(number)) {
            setAmount("");
            return
        }

        setAmount(number.toFixed(2));
    }

    return (
        <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
            <StatusBar style="light" />
            <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
                <Pressable onPress={() => router.back()} hitSlop={10}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </Pressable>
                <Text style={styles.headerTitle}>Between My Accounts</Text>
            </View>

            <View style={styles.boxContainer}>
                <View style={styles.boxSelect}>
                    <View style={styles.boxSelectChild}>
                        <Text style={styles.labelGreen}>From</Text>
                        <Text style={styles.labelGray}>Select From Account</Text>
                    </View>
                    <Ionicons name="chevron-down" size={24} color="black" />
                </View>
                <View style={styles.divider}></View>
                <View style={styles.boxSelect}>
                    <View style={styles.boxSelectChild}>
                        <Text style={styles.labelGreen}>To</Text>
                        <Text style={styles.labelGray}>Select To Account</Text>
                    </View>
                    <Ionicons name="chevron-down" size={24} color="black" />
                </View>
            </View>

            <View style={styles.boxContainer}>
                <View style={styles.boxSelect}>
                    <View style={styles.boxSelectChild}>
                        <Text style={styles.labelGreen}>Amount</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <FontAwesome name="dollar" size={18} color="black" />
                        <TextInput style={styles.amountStyle}
                            value={amount}
                            onChangeText={(text) => setAmount(text)}
                            keyboardType="decimal-pad"
                            placeholder="0.00"
                            onEndEditing={formatAmount}
                        />
                    </View>
                </View>
                <View style={[styles.divider, { marginHorizontal: 15 }]} />
                <View style={styles.preSetAmountContainer}>
                    <Pressable style={styles.preSetAmount}>
                        <FontAwesome name="dollar" size={18} color="black" />
                        <Text style={styles.amountStyle}>50</Text>
                    </Pressable>
                    <Pressable style={styles.preSetAmount}>
                        <FontAwesome name="dollar" size={18} color="black" />
                        <Text style={styles.amountStyle}>100</Text>
                    </Pressable>
                    <Pressable style={styles.preSetAmount}>
                        <FontAwesome name="dollar" size={18} color="black" />
                        <Text style={styles.amountStyle}>250</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView >
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f0eff3",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "#12462b",
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },

    boxContainer: {
        backgroundColor: "white",
        marginTop: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#bdbdbd"
    },

    boxSelect: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },

    boxSelectChild: {
        flexDirection: "column",
    },

    divider: {
        height: 1,
        backgroundColor: "#bdbdbd",
    },

    labelGreen: {
        color: "#12462b",
        fontSize: 14,
    },

    labelGray: {
        color: "#7f7f7f",
        fontSize: 18,

    },

    amountStyle: {
        color: "black",
        fontSize: 18,

    },

    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    preSetAmountContainer: {
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,

    },

    preSetAmount: {
        flex: 1,
        flexDirection: "row",
        borderColor: "#088707",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,

    },



});
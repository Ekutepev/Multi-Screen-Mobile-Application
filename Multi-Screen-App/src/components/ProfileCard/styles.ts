import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    accCard: {
        borderWidth: 1,
        borderColor: "#d6d6d6",
        borderRadius: 8,
        padding: 18,
    },

    accCardTop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },

    iconCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "#e8f3e8",
        alignItems: "center",
        justifyContent: "center",
    },

    accCardText: {
        flex: 1,
        gap: 4,
    },

    name: {
        fontSize: 17,
        fontWeight: "600",
        color: "black",
    },

    email: {
        fontSize: 15,
        color: "#666",
    },

    divider: {
        height: 1,
        backgroundColor: "#bdbdbd",
        marginVertical: 18,
    },

    available: {
        fontSize: 14,
        color: "black",
    },
});

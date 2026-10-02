import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  myAccountContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },

  myAccounts: {
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    zIndex: 1,
    elevation: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

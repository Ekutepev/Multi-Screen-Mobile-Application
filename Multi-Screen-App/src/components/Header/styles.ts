import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: 175,
    width: "100%",
    padding: 20,
    backgroundColor: "#008a00",
  },

  accHeader: {
    width: "100%",
    backgroundColor: "#f3f3f3",
  },

  groupedGreeting: {
    marginTop: 15,
  },

  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  greeting: {
    color: "white",
    fontSize: 18,
  },
});

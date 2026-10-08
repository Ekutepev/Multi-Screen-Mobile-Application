import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },

  HeaderOne: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  HeaderTwo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  HeaderThree: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  RegBoldText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  LargeBoldText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  }
});

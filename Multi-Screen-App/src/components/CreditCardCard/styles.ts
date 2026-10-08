import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  creditCardTab: {
    width: "100%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  creditCardTabTextContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingVertical: 15,
    marginLeft: 15,
  },

  innerCreditCardTabTextContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },

  creditCardTabText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  cardName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#008a00",
  },

  balanceContainer: {
    marginLeft: "auto",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  balance: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

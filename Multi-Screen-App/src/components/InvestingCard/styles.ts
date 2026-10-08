import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  personalInvestmentTab: {
    width: "100%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  personalInvestmentTabTextContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 15,
  },

  personalInvestmentTabText: {
    fontWeight: "bold",
    fontSize: 19,
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

  accountList: {
    width: "100%",
    paddingRight: 10,
    paddingBottom: 10,
    // borderTopWidth: 1,

  },

  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingLeft: 15,
    borderTopWidth: 1,

  },

  cardName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#008a00",
    width: "80%",
  },
});

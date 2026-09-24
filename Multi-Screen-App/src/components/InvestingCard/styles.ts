import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  personalInvestmentTab: {
    width: "90%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  personalInvestmentTabTextContainer: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    marginLeft: 15,
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
});

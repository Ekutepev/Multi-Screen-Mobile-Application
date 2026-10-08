import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bankTab: {
    width: "100%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 10,
  },

  bankTabTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
  },

  bankTabText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  subText: {
    color: "#7a7a7a",
  },

  balanceContainer: {
    marginLeft: "auto",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  balance: {
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 18,
  },

  accountList: {
    width: "100%",
    paddingRight: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
  },

  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  cardName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#008a00",
    width: "60%",
  },
});

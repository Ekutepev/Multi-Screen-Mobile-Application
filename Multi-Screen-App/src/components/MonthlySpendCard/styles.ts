import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  monthTab: {
    width: "90%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  monthTabTextContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingVertical: 15,
  },

  Subcard: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: 15,
    gap: 10,
    marginBottom: 15,
  },

  subTabTextContainer: {
    flex: 1,
    flexDirection: "column",
  },


  monthTabText: {
    fontWeight: "bold",
    fontSize: 19,
    paddingLeft: 15,
    marginBottom: 10
  },

  subText: {
    color: "#535454",
    paddingBottom: 10,
    fontSize: 18,
  },

  greenBalanceContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 15,
    backgroundColor: "#ecf7e9",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch"
  },

  grayBalanceContainer: {
    padding: 15,
    // marginHorizontal: 15,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },


  balance: {
    fontWeight: "bold",
    marginRight: 5,
    paddingBottom: 20,
    paddingTop: 30,
    fontSize: 28,
  },

  subBalance: {

    fontWeight: "bold",
    fontSize: 24,

  },
});

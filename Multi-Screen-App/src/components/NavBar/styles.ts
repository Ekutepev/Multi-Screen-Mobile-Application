import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  navBarContainer: {
    flex: 1,
    height: "auto",
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  navBarIconAlignment: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 20,
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },

  navBarText: {
    fontSize: 12,
  },
});

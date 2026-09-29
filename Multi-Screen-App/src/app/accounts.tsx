import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Header from "@/components/Header/Header";

export default function Accounts() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Header name="My Accounts" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f3f3f3",
  },
});